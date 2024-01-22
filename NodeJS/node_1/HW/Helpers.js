const { readFile, writeFile } = require("fs");

const { interface} = require("./main")

function askQuestion(question, timeout = null) {
    return new Promise((resolved, rejected) => {

        if (timeout != null) {
            setTimeout(() => {
                rejected('\n--------------\nTime\'s Up!\n--------------');
                interface.close();
            }, timeout);
        }
        interface.question(`${question} `, (result, error) => {
            if (error) { rejected(error); }
            else { resolved(result); }
            // interface.close();            
        });
    });
}

function readJsonFile(fileName) {
    return new Promise((resolved, rejected) => {
        readFile(fileName, (error, result) => {
            if (error) { rejected(error); }
            else { resolved(JSON.parse(result)); }
        });
    });
};

function WriteJsonFile(fileName, dataAsString) {
    return new Promise((resolved, rejected) => {
        writeFile(fileName, JSON.stringify(dataAsString), (error, result) => {
            if (error) { rejected(error); }
            else { resolved(result); }
        });
    });
};

module.exports = {
    askQuestion: askQuestion,
    readJsonFile: readJsonFile,
    WriteJsonFile: WriteJsonFile
};