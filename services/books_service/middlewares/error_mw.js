const {
    SERVER_ERR_CODE,
    SERVER_ERR_MESSAGE,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
    ERROR_STACK_MESSAGE,
} = require('../routes/constants');
const { logger } = require('../utils');
const { getLogDataFromReq } = require('./utils');

const addErrorHandlingTo = (serverApp) => {
    const errorHandling = (req, res) => {
        res.status(NOT_FOUND_CODE);
        res.send(NOT_FOUND_MESSAGE);
        const notFoundErrorLog = `Response - Status: ${NOT_FOUND_CODE}, Message: ${NOT_FOUND_MESSAGE}`;
        logger.log(notFoundErrorLog);
    };
    // it's stand alone, cause should be at the end of initing
    serverApp.use(errorHandling);
};
const serverErrorFallback = (err, req, res, next) => {
    const { requestLog } = getLogDataFromReq(req);
    // ---
    const { stack } = err;
    res.status(SERVER_ERR_CODE);
    res.send(SERVER_ERR_MESSAGE);
    const serverErrorLog = `Response - Status: ${SERVER_ERR_CODE}, Message: ${SERVER_ERR_MESSAGE}`;
    // ---
    logger.log(requestLog);
    logger.log(serverErrorLog);
    logger.log(ERROR_STACK_MESSAGE);
    logger.log(stack);
};

module.exports = {
    addErrorHandlingTo,
    serverErrorFallback,
};