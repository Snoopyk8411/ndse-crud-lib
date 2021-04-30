const fs = require('fs');
const path = require('path');
const {
    PATH_TO_BOOKS_STATIC,
} = require('../constants');
const { logger } = require('../utils');

const deleteAttachment = (fileName) => {
    const filePath = path.join(PATH_TO_BOOKS_STATIC, fileName);

    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => logger.log(err));
    }
};

module.exports = {
    deleteAttachment,
};