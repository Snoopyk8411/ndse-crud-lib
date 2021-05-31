const axios = require('axios');
axios.interceptors.response.use(null, error => {
    if (error && error.message === 'Network Error') {
      throw new Error(`Potential network CORS preflight error at ${error.config.url}`);
    }
    throw error;
});
// ---
const { MS_BROKER_CALL_URL, TECH_PORT, SERVER_PORT } = require('./constants');
const { logger } = require('../utils');

const injectServiceHost = (urlPlugin, serviceName, nextAction) => {
    const { formatUrl } = urlPlugin;
    const msBrokerCallUrl = formatUrl(TECH_PORT, MS_BROKER_CALL_URL);

    return axios.get(`${msBrokerCallUrl}${serviceName}`)
    .then(res => {
        logger.log(res.data);
        const { port } = res.data || {};
        return nextAction(urlPlugin, port);
    })
    .catch((error) => {
        logger.log(error);
        return nextAction(urlPlugin, SERVER_PORT);
    });
};

module.exports = {
    injectServiceHost,
};