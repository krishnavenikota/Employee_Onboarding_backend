const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', '/dataFiles/feedBack.json');

// Function to read data from the JSON file
const readFeedBack = () => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
};

// Function to write data to the JSON file
const writeEmployerFeedBack = (name, feedBack) => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const oldFileData = JSON.parse(fileData);
    oldFileData.employee.push({ name, feedBack });
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

const writeProcessFeedBack = (category, feedBack) => {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const oldFileData = JSON.parse(fileData);
    oldFileData.process.push({ category, feedBack });
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

module.exports = { readFeedBack, writeEmployerFeedBack, writeProcessFeedBack };
