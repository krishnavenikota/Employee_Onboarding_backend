const fs = require('fs');
const path = require('path');

const employeeDataFile = path.join(__dirname, '..', '/dataFiles/employee.json');
const businessUnitFile = path.join(
  __dirname,
  '..',
  '/dataFiles/businessunit.json'
);
const platformFile = path.join(__dirname, '..', '/dataFiles/platform.json');
const labsFile = path.join(__dirname, '..', '/dataFiles/labs.json');
const featureTeamFile = path.join(
  __dirname,
  '..',
  '/dataFiles/featureteam.json'
);

// Function to read data from the JSON file
const getEmployerDetails = (name) => {
  try {
    const empfileData = fs.readFileSync(employeeDataFile, 'utf8');
    const bufileData = fs.readFileSync(businessUnitFile, 'utf8');
    const platformfileData = fs.readFileSync(platformFile, 'utf8');
    const labfileData = fs.readFileSync(labsFile, 'utf8');
    const ftfileData = fs.readFileSync(featureTeamFile, 'utf8');
    const emplist = JSON.parse(empfileData);
    const bu = JSON.parse(bufileData);
    const pl = JSON.parse(platformfileData);
    const lab = JSON.parse(labfileData);
    const ft = JSON.parse(ftfileData);
    const empData = emplist.find((ele) => ele.name == name);
    const emp = {
      buInfo: bu[empData.businessUnit],
      labInfo: lab[empData.lab],
      platformInfo: pl[empData.platform],
      ftInfo: ft[empData.featureTeam],
    };

    return emp;
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
};

module.exports = { getEmployerDetails };
