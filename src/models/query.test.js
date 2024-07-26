// dataHandler.test.js
const fs = require('fs');
const { writeData } = require('./query');

jest.mock('fs');

describe('writeData', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('successfully reads, modifies, and writes data to the file', () => {
    const oldData = [{ query: 'oldQuery', category: 'oldCategory', person: 'oldPerson' }];
    const newData = { query: 'newQuery', category: 'newCategory', person: 'newPerson' };
    
    fs.readFileSync.mockReturnValue(JSON.stringify(oldData)); // Mock readFileSync to return old data
    fs.writeFileSync.mockImplementation(() => {}); // Mock writeFileSync to do nothing

    writeData(newData.query, newData.category, newData.person);

    expect(fs.readFileSync).toHaveBeenCalled()
    expect(fs.writeFileSync).toHaveBeenCalled()
  });

  test('handles error when reading from file', () => {
    fs.readFileSync.mockImplementation(() => {
      throw new Error('Failed to read file');
    });
    fs.writeFileSync.mockImplementation(() => {});

    writeData('query', 'category', 'person');

    expect(fs.readFileSync).toHaveBeenCalled()
    expect(fs.writeFileSync).not.toHaveBeenCalled();
   
  });

  test('handles error when writing to file', () => {
    const oldData = [{ query: 'oldQuery', category: 'oldCategory', person: 'oldPerson' }];
    const newData = { query: 'newQuery', category: 'newCategory', person: 'newPerson' };
    
    fs.readFileSync.mockReturnValue(JSON.stringify(oldData));
    fs.writeFileSync.mockImplementation(() => {
      throw new Error('Failed to write file');
    });

    writeData(newData.query, newData.category, newData.person);

    expect(fs.readFileSync).toHaveBeenCalled()
    expect(fs.writeFileSync).toHaveBeenCalled()

  });
});
