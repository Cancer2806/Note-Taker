// Define required modules
const fs = require('fs');
const util = require('util');


// Function to read the data file
const readDataFile = (fileName) => {
  return JSON.parse(fs.readFileSync(fileName, 'utf8',
    (err) =>
      err ? console.error(err) : console.info(`Data read from ${fileName} successfully`)));
};

// Function to write the data file to disk
const writeDataFile = (fileName, data) => {
  fs.writeFileSync(fileName, JSON.stringify(data),
    (err) =>
      err ? console.error(err) : console.info(`Data written to ${fileName} successfully`));
};

// Function to add new data to the data file
const addContent = (newData, fileName) => {
  const fileData = readDataFile(fileName);
  fileData.unshift(newData);
  writeDataFile(fileName, fileData);
};

// Function to remove data from the data file
const removeContent = (delId, fileName) => {
  const fileData = readDataFile(fileName);
  const newData = fileData.filter((item) => {
    return item.id !== delId;
  })
  writeDataFile(fileName, newData);
};

// export modules
module.exports = { readDataFile, addContent, removeContent };