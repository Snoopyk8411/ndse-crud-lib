const express = require('express');
const {
    SUCCESS_CODE,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
} = require('./constants');
const { logger, SILENT } = require('../utils');

const initRouter = () => {
    return express.Router();
};

const handleSuccess = (response, createdData) => {
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

module.exports = {
    logger,
    SILENT,
    initRouter,
    handleNotFound,
    handleSuccess,
};