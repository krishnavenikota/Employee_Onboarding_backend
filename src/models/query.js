const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', '/dataFiles/query.json');

// Function to read data from the JSON file
const readData = () => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
};

// Function to write data to the JSON file
const writeData = (query, category, person) => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const oldFileData = JSON.parse(fileData);
    oldFileData.push({ query, category, person });
    fs.writeFileSync(
      dataFilePath,
      JSON.stringify(oldFileData, null, 2),
      'utf8'
    );
    console.log('Data saved successfully!');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
};

module.exports = { readData, writeData };
