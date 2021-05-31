const {
    startListenToPort,
    createServerAppInstance,
    SERVER_PORT,
} = require('../utils');
const {
    addMiddlewaresTo,
    addErrorHandlingTo,
} = require('./middlewares');
const {
    initAPI,
} = require('./routes');
const { msBrokerDB } = require('./database');
const { MS_BROKER_SERVICE_NAME, TECH_PORT_STEP } = require('./constants');
const { getServicesToRun } = require('./utils');
const { runNode } = require('./tasks');

const TECH_PORT = SERVER_PORT - TECH_PORT_STEP;

const startServiceTask = ({ flags }) => {
    const { servicesToRun, hasServicesToRun } = getServicesToRun(flags);
    if (hasServicesToRun) {
        runNode(servicesToRun);
    }
};

const initMSBrokerService = (initData) => {
    const { serverApp } = createServerAppInstance();
    addMiddlewaresTo(serverApp);
    initAPI({ serverApp, msBrokerDB });
    addErrorHandlingTo(serverApp);
    startListenToPort(serverApp, initData, TECH_PORT);
    startServiceTask(initData);
};

module.exports = {
    initMSBrokerService,
    MS_BROKER_SERVICE_NAME,
};