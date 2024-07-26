const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', '/dataFiles/jobs.json');

const getJobListings = () => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
};

module.exports = { getJobListings };
