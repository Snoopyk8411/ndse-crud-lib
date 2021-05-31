const cors = require('cors');
const bodyParser = require("body-parser");
const { BODY_PARSE_CONFIG } = require('./constants');
// ---
const { addErrorHandlingTo, serverErrorFallback } = require('./error_mw');
const { loggingRequests } = require('./logger_mw');
// applicable middlewares - used on places
const applicableMiddlewares = {};

const addMiddlewaresTo = (appInstance) => {
    appInstance.use(bodyParser.json(BODY_PARSE_CONFIG));
    appInstance.use(bodyParser.urlencoded({ extended: false }));
    appInstance.use(cors());
    appInstance.use(loggingRequests);
    appInstance.use(serverErrorFallback);
    return applicableMiddlewares;
};

module.exports = {
    addMiddlewaresTo,
    addErrorHandlingTo,
};