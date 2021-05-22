const cors = require('cors');
// ---
const { addErrorHandlingTo, serverErrorFallback } = require('./error_mw');
const { loggingRequests } = require('./logger_mw');
// applicable plugins - used on places
const applicablePlugins = {};

const addPluginsTo = (appInstance) => {
    appInstance.use(cors());
    appInstance.use(loggingRequests);
    appInstance.use(serverErrorFallback);
    return applicablePlugins;
};

module.exports = {
    addPluginsTo,
    addErrorHandlingTo,
};