const { HEADER_USER_AGENT } = require('../constants');

const getLogDataFromReq = (request) => {
    const { method, url } = request;
    const userAgent = request.get(HEADER_USER_AGENT);
    let requestLog = `Request - ${method}: ${url} User-Agent: ${userAgent}`;
    return {
        requestLog,
    };
};

const addTimeMarker = () => new Date().toISOString().replace(/:/g, '-');

module.exports = {
    getLogDataFromReq,
    addTimeMarker,
};