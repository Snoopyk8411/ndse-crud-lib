const express = require('express');
const cors = require('cors');
const formData = require("express-form-data");

const {
    SERVER_PORT,
    SUCCESS_START_MES,
    SUCCESS_START_STY_MES,
} = require('./constants');
const { logger, SILENT } = require('../utils');
// ---
const getSuccessMessage = (isStylish) => isStylish ? SUCCESS_START_STY_MES : SUCCESS_START_MES;
// ---
const addPluginsTo = (appInstance) => {
    appInstance.use(formData.parse());
    appInstance.use(cors());
};

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
    addPluginsTo,
    startListenToPort,
    createServerAppInstance,
};