const { HEADER_USER_AGENT } = require('../constants');
const { MIME_TYPES_BLACK_LIST } = require('./constants');

const getLogDataFromReq = (request) => {
    const { method, url } = request;
    const userAgent = request.get(HEADER_USER_AGENT);
    let requestLog = `Request - ${method}: ${url} User-Agent: ${userAgent}`;
    return {
        requestLog,
    };
};

const addTimeMarker = () => new Date().toISOString().replace(/:/g, '-');
const isMIMETypeAllowed = (fileMIMEType) => !MIME_TYPES_BLACK_LIST.includes(fileMIMEType);

module.exports = {
    getLogDataFromReq,
    addTimeMarker,
    isMIMETypeAllowed,
};