const express = require('express');

const {
    SERVER_PORT,
    SUCCESS_START_MES,
    SUCCESS_START_STY_MES,
} = require('./constants');
const { logger, SILENT } = require('../utils');
// ---
const getSuccessMessage = (isStylish) => isStylish ? SUCCESS_START_STY_MES : SUCCESS_START_MES;
// ---
const startListenToPort = (serverApp, isStylish) =>
    serverApp.listen(SERVER_PORT, () => {
        const successMessage = getSuccessMessage(isStylish);
        logger.log(`${successMessage} ${SERVER_PORT}`);
    });
// ---
const createServerAppInstance = () => {
    const serverApp = express();
    return { serverApp };
};

module.exports = {
    logger,
    SILENT,
    startListenToPort,
    createServerAppInstance,
};