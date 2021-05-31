const axios = require('axios');
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