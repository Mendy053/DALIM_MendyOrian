const { writeFile, readFile } = require("fs");

function readFiles(path) {
   return new Promise((resolve, reject) => {
      readFile(path, "utf-8", (error, result) => {
         if (error) {
            reject(error);
         } else {
            resolve(JSON.parse(result));
         }
      });
   });
}

function writeFiles(path, data) {
   return new Promise((resolve, reject) => {
      writeFile(path, JSON.stringify(data), (error, result) => {
         if (error) {
            reject(error);
         } else {
            resolve(result);
         }
      });
   });
}

module.exports = {
   readFiles: readFiles,
   writeFiles: writeFiles,
};
