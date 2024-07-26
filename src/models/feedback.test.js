const fs = require('fs');
const { readFeedBack, writeEmployerFeedBack, writeProcessFeedBack } = require('./feedback');

jest.mock('fs');

describe('readFeedBack', () => {
  test('reads and parses JSON file', () => {
    const mockData = { key: 'value' };
    fs.readFileSync.mockReturnValue(JSON.stringify(mockData));
    const result = readFeedBack();
    expect(result).toEqual(mockData);
  });

});


describe('writeEmployerFeedBack', () => {
    beforeEach(() => {
      jest.clearAllMocks(); 
    });
  
    test('successfully reads, modifies, and writes data to the file', () => {
      const oldData = [{ feedback: 'oldQuery', name: 'oldPerson' }];
      const newData = { feedback: 'newQuery', name: 'newPerson' };
      
      fs.readFileSync.mockReturnValue(JSON.stringify(oldData)); // Mock readFileSync to return old data
      fs.writeFileSync.mockImplementation(() => {}); // Mock writeFileSync to do nothing
  
      writeEmployerFeedBack(newData.name, newData.feedback);
  
      expect(fs.readFileSync).toHaveBeenCalled()
    });
  
    test('handles error when reading from file', () => {
      fs.readFileSync.mockImplementation(() => {
        throw new Error('Failed to read file');
      });
      fs.writeFileSync.mockImplementation(() => {});
  
      writeEmployerFeedBack('query', 'category', );
  
      expect(fs.readFileSync).toHaveBeenCalled()
      expect(fs.writeFileSync).not.toHaveBeenCalled();
     
    });
  
    test('handles error when writing to file', () => {
        const oldData = [{ feedback: 'oldQuery', name: 'oldPerson' }];
        const newData = { feedback: 'newQuery', name: 'newPerson' };
      
      fs.readFileSync.mockReturnValue(JSON.stringify(oldData));
      fs.writeFileSync.mockImplementation(() => {
        throw new Error('Failed to write file');
      });
  
      writeEmployerFeedBack(newData.name, newData.feedback);
  
      expect(fs.readFileSync).toHaveBeenCalled()
      
    });
  });
  
