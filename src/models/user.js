const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', '/dataFiles/data.json');

// Function to read data from the JSON file
const readUserData = () => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
};

module.exports = { readUserData };
