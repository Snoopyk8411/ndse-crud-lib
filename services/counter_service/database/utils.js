const fs = require('fs');
const path = require('path');
const {
    PATH_TO_COUNTER_STATIC,
} = require('../constants');
const { COUNTER_DATA_FILENAME } = require('./constants');
const { logger } = require('../utils');

const DB_FILENAME = path.join(PATH_TO_COUNTER_STATIC, COUNTER_DATA_FILENAME);;
// ---
const appendDBFile = () => {
    try {
        fs.appendFileSync(DB_FILENAME);
    } catch (err) {
        logger.log(err);
    }
};

const getFromDBFile = () => {
    if (fs.existsSync(DB_FILENAME)) {
        const fileRawData = fs.readFileSync(DB_FILENAME, (err) => logger.log(err));
        let data = {};
        try {
            data = JSON.parse(fileRawData);
        } catch (error) {
            logger.log(error);
        }
        return data;
    } else {
        appendDBFile();
    }
    return {};
};

const addToDBFile = (data) => {
    const writableData = JSON.stringify(data, null, 2);
    fs.writeFile(DB_FILENAME, writableData, (err) => logger.log(err));
}

module.exports = {
    getFromDBFile,
    addToDBFile,
};