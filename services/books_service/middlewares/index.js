const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { BODY_PARSE_CONFIG } = require('./constants');
const {
    STATIC_DIR_PATH,
    PATH_TO_STATIC,
} = require('../constants');
// ---
const { addErrorHandlingTo, serverErrorFallback } = require('./error_mw');
const { loggingRequests } = require('./logger_mw');
// applicable plugins - used on places
const { handleFile } = require('./file_mw');
const applicablePlugins = {
    handleFile,
};

const addPluginsTo = (appInstance) => {
    appInstance.use(bodyParser.json(BODY_PARSE_CONFIG));
    appInstance.use(cors());
    appInstance.use(STATIC_DIR_PATH, express.static(PATH_TO_STATIC));
    appInstance.use(loggingRequests);
    appInstance.use(serverErrorFallback);
    return applicablePlugins;
};

module.exports = {
    addPluginsTo,
    addErrorHandlingTo,
};