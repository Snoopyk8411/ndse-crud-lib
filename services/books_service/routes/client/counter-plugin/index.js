const axios = require('axios');
const { COUNTER_CALL_URL } = require('./constants');
const { logger } = require('../utils');

const getBookWatchCount = (bookId, nextAction) => {
    axios.get(`${COUNTER_CALL_URL}${bookId}`)
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
    axios.post(`${COUNTER_CALL_URL}${bookId}/incr`)
    .catch((error) => logger.log(error));
};

module.exports = {
    getBookWatchCount,
    updateWatchCount,
};