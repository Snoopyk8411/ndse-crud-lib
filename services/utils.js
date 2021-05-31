const express = require('express');
const { logger, SILENT } = require('../utils/logger');

const {
    SERVER_PORT,
    PORT_STEP,
    BROKER_PATTERN,
    ERROR,
    ERROR_CODE_PORT_BUSY,
    SUCCESS_START_MES,
    SUCCESS_START_STY_MES,
    ANOTHER_PORT_MES,
} = require('./constants');

// ---
const getSuccessMessage = (isStylish) => isStylish ? SUCCESS_START_STY_MES : SUCCESS_START_MES;
// ---
const getNextPort = (port) => port + PORT_STEP;

const listenAnotherPort = (eventData, port) => {
    const { serverApp, initData } = eventData;
    const nextPort = getNextPort(port);
    logger.log(ANOTHER_PORT_MES, nextPort, SILENT);
    startListenToPort(serverApp, initData, nextPort);
};
const handleListenStartError = (eventData) => {
    const { error } = eventData;
    const { code, port, message, stack } = error;
    logger.log(message, SILENT);
    logger.log(stack, SILENT);

    const portIsBusy = code === ERROR_CODE_PORT_BUSY;
    if (portIsBusy) listenAnotherPort(eventData, port);
};
// ---
const startListenToPort = (serverApp, initData, customPort) => {
    const port = customPort || SERVER_PORT;
    const { serviceName, isStylish } = initData;

    serverApp.listen(port, () => {
        const [serviceMessage, portMessage] = getSuccessMessage(isStylish);
        logger.log(`${serviceMessage} ${serviceName}`);
        logger.log(`${portMessage} ${port}`);
        logger.log(`${BROKER_PATTERN}${port}`);
    }).on(ERROR, (error) => handleListenStartError({ serverApp, initData, error }));
};

const createServerAppInstance = () => {
    const serverApp = express();
    return { serverApp };
};

module.exports = {
    logger,
    SILENT,
    startListenToPort,
    createServerAppInstance,
    SERVER_PORT,
};