
const fs = require('fs');
const path = require('path');

const fileSystemManager = {
  readData: (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  },
  writeData: (filePath, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  },
};

module.exports = fileSystemManager;
