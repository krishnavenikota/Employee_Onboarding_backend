const fs = require('fs');
const { getJobListings } = require('./jobs');

jest.mock('fs');

describe('getJobListings', () => {
  test('reads and parses JSON file', () => {
    const mockData = { key: 'value' };
    fs.readFileSync.mockReturnValue(JSON.stringify(mockData));
    const result = getJobListings();
    expect(result).toEqual(mockData);
  });

});
