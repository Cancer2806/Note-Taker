// Define required modules
const fs = require('fs');
const util = require('util');


// Function to read the data file
// const readDataFile = (fileName) => util.promisify(fs.readFile(fileName));
const readDataFile = (fileName) => {
  return JSON.parse(fs.readFileSync(fileName, 'utf8'))
}

// Function to write the data file to disk
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, JSON.stringify(data),
    (err) =>
      err ? console.error(err) : console.info(`Data written to ${fileName} successfully`)
  );
}

// Function to add new data to a data file
const addContent = (newData, fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const fileData = JSON.parse(data);
      fileData.unshift(newData);
      writeToFile(fileName, fileData);
    }
  })
}


// Function to remove data from the data file


// module export
module.exports = { readDataFile, addContent, writeToFile };