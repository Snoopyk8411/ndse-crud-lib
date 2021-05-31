const {
    startListenToPort,
    createServerAppInstance,
} = require('../utils');
const {
    addMiddlewaresTo,
    addErrorHandlingTo,
} = require('./middlewares');
const {
    initAPI,
} = require('./routes');
const { counterDB } = require('./database');
const { COUNTER_SERVICE_NAME } = require('./constants');

const initCounterService = (initData) => {
    const { serverApp } = createServerAppInstance();
    addMiddlewaresTo(serverApp);
    initAPI({ serverApp, counterDB });
    addErrorHandlingTo(serverApp);
    startListenToPort(serverApp, initData);
};

module.exports = {
    initCounterService,
    COUNTER_SERVICE_NAME,
};