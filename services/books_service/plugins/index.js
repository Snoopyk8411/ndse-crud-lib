const { getRequestUrl } = require('./url_request');
const { counterPlugin } = require('./counter-plugin');
const { injectServiceHost } = require('./ms_broker_plugin');

const plugins = {
    getRequestUrl,
    counterPlugin,
    injectServiceHost,
};

module.exports = {
    plugins,
};