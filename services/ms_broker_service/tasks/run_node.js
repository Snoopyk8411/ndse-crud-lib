const { spawn } = require('child_process');
const {
    NPM_SHELL,
    NPM_RUN_COMMAND,
    DATA_EVENT,
    CLOSE_EVENT,
    SERVICE_OUTPUT,
    SERVICE_ERROR,
    SERVICE_CLOSE,
    BROKER_PATTERN,
    EOL,
} = require('./constants');
const { logger } = require('./utils');
const { msBrokerDB } = require('../database');

const savePortToDB = (message, serviceName) => {
    const [ _, portRawData ] = message.split(BROKER_PATTERN);
    const portData = portRawData.replace(EOL, '');
    msBrokerDB.registerService({ name: serviceName, port: portData });
};

const registerService = (service, serviceName) => {
    const checkPortInfo = (data) => {
        const message = `${data}`;
        if (message.includes(BROKER_PATTERN)) {
            savePortToDB(message, serviceName);
            service.stdout.removeListener(DATA_EVENT, checkPortInfo);
        }
    };
    service.stdout.on(DATA_EVENT, checkPortInfo);
};

const addLoggingOnService = (service, serviceName) => {
    service.stdout.on(DATA_EVENT, (data) => {
        logger.log(`${serviceName}${SERVICE_OUTPUT}${data}`);
    });

    service.stderr.on(DATA_EVENT, (data) => {
        logger.log(`${serviceName}${SERVICE_ERROR}${data}`);
    });

    service.on(CLOSE_EVENT, (code) => {
        logger.log(`${serviceName}${SERVICE_CLOSE}${code}`);
    });
};

const spawnServices = (serviceLink, key) => {
    const { name: serviceName, next: nextLink } = serviceLink
    const service = spawn(NPM_SHELL, [NPM_RUN_COMMAND, serviceName]);

    addLoggingOnService(service, serviceName);
    registerService(service, serviceName);

    service.stdout.once(DATA_EVENT, () => {
        if (nextLink) {
            spawnServices(nextLink[key], key);
        }
    });
};

const runNode = (servicesChain) => {
    const { key } = servicesChain;
    const serviceLink = servicesChain[key];
    // recursively, because order of starting is important
    spawnServices(serviceLink, key);
};

module.exports = {
    runNode,
};