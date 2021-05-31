const {
    logger,
    SILENT,
} = require('../utils');
const { RUNNABLE_SERVICES, SERVICE_KEY } = require('./constants');

const setServicesChain = (services) => {
    let servicesChain = { key: SERVICE_KEY };
    let index = 0;
    const maxIndex = services.length - 1;

    const setServices = (chain, services) => {
        const serviceName = services[index];
        chain[SERVICE_KEY] = { name: serviceName, next: {} };
        index += 1;
        if (index <= maxIndex) {
            setServices(chain[SERVICE_KEY].next, services);
        } else {
            chain[SERVICE_KEY].next = null;
        }
    };
    setServices(servicesChain, services);

    return servicesChain;
};

const getServicesToRun = (flags) => {
    let servicesToRun = {};

    const servicesArgument = flags[RUNNABLE_SERVICES] || '';
    const services = servicesArgument.split(',');
    const hasServicesToRun = services && services.length !== 0;
    if (hasServicesToRun) {
        servicesToRun = setServicesChain(services);
    }
    return { servicesToRun, hasServicesToRun };
};

module.exports = {
    logger,
    SILENT,
    getServicesToRun,
};