const axios = require('axios');
axios.interceptors.response.use(null, error => {
    if (error && error.message === 'Network Error') {
      throw new Error(`Potential network CORS preflight error at ${error.config.url}`);
    }
    throw error;
});
// ---
const { COUNTER_CALL_URL, COUNTER_SERVICE_NAME } = require('./constants');
const { logger } = require('../utils');

const counterPlugin = {
    getServiceName: () => COUNTER_SERVICE_NAME,
    getCounter: (urlPlugin, port) => {
        const { formatUrl } = urlPlugin;
        const counterCallUrl = formatUrl(port, COUNTER_CALL_URL);

        const getBookWatchCount = (bookId, nextAction) => {
            axios.get(`${counterCallUrl}${bookId}`)
            .then(res => {
                const { count = 1 } = res.data || {};
                nextAction(count);
            })
            .catch((error) => {
                logger.log(error);
                const count = 1;
                nextAction(count);
            });
        };
        
        const updateWatchCount = (bookId) => {
            axios.post(`${counterCallUrl}${bookId}/incr`)
            .catch((error) => logger.log(error));
        };
    
        const counter = {
            getBookWatchCount,
            updateWatchCount
        };
        return counter;
    },
};

module.exports = {
    counterPlugin,
};