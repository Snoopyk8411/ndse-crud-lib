const express = require('express');
const path = require('path');
const {
    SUCCESS_CODE,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
    PATH_TO_BOOKS_STATIC,
} = require('./constants');
const { logger, SILENT } = require('../utils');

const initRouters = () => {
    const booksAPIRouter = express.Router();
    const loginAPIRouter = express.Router();
    return {
        booksAPIRouter,
        loginAPIRouter,
    };
};

const handleSuccessCreated = (response, createdData) => {
    response.status(SUCCESS_CODE);
    response.json(createdData);
    const successCreatedLog = `Response - Status: ${SUCCESS_CODE}, Created data:`;
    logger.log(successCreatedLog);
    logger.log(createdData);
};

const handleNotFound = (response) => {
    response.status(NOT_FOUND_CODE);
    response.json(NOT_FOUND_MESSAGE);
    const notFoundErrorLog = `Response - Status: ${NOT_FOUND_CODE}, Message: ${NOT_FOUND_MESSAGE}`;
    logger.log(notFoundErrorLog);
};

const getFilePath = (fileName) => {
    const filePath = path.join(PATH_TO_BOOKS_STATIC, fileName);
    return filePath;
};

module.exports = {
    logger,
    SILENT,
    initRouters,
    handleNotFound,
    handleSuccessCreated,
    getFilePath,
};