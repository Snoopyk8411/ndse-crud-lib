const {
    SERVICE_NAME_FLAG,
    DEFAULT_SERVICE_NAME,
} = require('./constants');

const { logger, SILENT } = require('../../utils/logger');
const { initors } = require('../../services');

const getServiceName = (flags) => {
    const hasServiceName = !!flags[SERVICE_NAME_FLAG];
    const serviceName = hasServiceName ? flags[SERVICE_NAME_FLAG] : DEFAULT_SERVICE_NAME;
    return serviceName;
};

module.exports = {
    logger,
    SILENT,
    getServiceName,
    initors,
};