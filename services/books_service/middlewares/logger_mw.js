const { logger } = require('../utils');
const { getLogDataFromReq } = require('./utils');

const loggingRequests = (req, res, next) => {
    const { requestLog } = getLogDataFromReq(req);
    logger.log(requestLog);
    next();
};

module.exports = {
    loggingRequests,
};