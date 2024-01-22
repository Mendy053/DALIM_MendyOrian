const fs = require("fs");

const GetFileContent = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, dataFromFile) => {
            if (err) {
                reject(err);
            } else {
                try {
                    resolve(JSON.parse(dataFromFile));
                } catch (e) {
                    resolve(dataFromFile);
                }
            }
        });
    });
};

const AddToFileContent = (path, data) => {
    return new Promise(async (resolve, reject) => {
        try {

            const fileData = await GetFileContent(path);
            if (Array.isArray(fileData)) {
                fileData.push(data);
                fs.writeFile(path, JSON.stringify(fileData), () => {
                    resolve();
                });
            } else if (typeof fileData == "object") {
                fs.writeFile(data, JSON.stringify({ ...fileData, ...data }), () => {
                    resolve();
                });
            } else {
                fs.appendFile(path, data, () => {
                    resolve();
                });
            }
        } catch (e) {
            throw e;
        }
    });
};

module.exports = {
    AddToFileContent: AddToFileContent,
    GetFileContent: GetFileContent
};