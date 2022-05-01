// Required modules
const fs = require('fs');
const util = require('util');


// read Data File
// const readDataFile = (fileName) => util.promisify(fs.readFile(fileName));
const readDataFile = (fileName) => {
  return JSON.parse(fs.readFileSync(fileName, 'utf8'))
}

// function to write data to file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, JSON.stringify(data),
    (err) =>
      err ? console.error(err) : console.info(`Data written to ${fileName} successfully`)
  );
}


// function to read in a data file and add new content
const addContent = (newData, fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(newData);
      writeToFile(fileName, parsedData);
    }
  })
}


// module export
module.exports = { readDataFile, addContent };