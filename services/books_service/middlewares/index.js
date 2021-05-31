const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { BODY_PARSE_CONFIG, VIEW_ENGINE_CONFIG } = require('./constants');
const {
    STATIC_DIR_PATH,
    PATH_TO_STATIC,
} = require('../constants');
// ---
const { addErrorHandlingTo, serverErrorFallback } = require('./error_mw');
const { loggingRequests } = require('./logger_mw');
// applicable middlewares - used on places
const { handleFile } = require('./file_mw');
const applicableMiddlewares = {
    handleFile,
};

const addMiddlewaresTo = (appInstance) => {
    appInstance.set(...VIEW_ENGINE_CONFIG);
    appInstance.use(bodyParser.json(BODY_PARSE_CONFIG));
    appInstance.use(bodyParser.urlencoded({ extended: false }));
    appInstance.use(cors());
    appInstance.use(`/${STATIC_DIR_PATH}`, express.static(PATH_TO_STATIC));
    appInstance.use(loggingRequests);
    appInstance.use(serverErrorFallback);
    return applicableMiddlewares;
};

module.exports = {
    addMiddlewaresTo,
    addErrorHandlingTo,
};