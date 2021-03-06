const cors = require('cors');
// ---
const { addErrorHandlingTo, serverErrorFallback } = require('./error_mw');
const { loggingRequests } = require('./logger_mw');
// applicable middlewares - used on places
const applicableMiddlewares = {};

const addMiddlewaresTo = (appInstance) => {
    appInstance.use(cors());
    appInstance.use(loggingRequests);
    appInstance.use(serverErrorFallback);
    return applicableMiddlewares;
};

module.exports = {
    addMiddlewaresTo,
    addErrorHandlingTo,
};