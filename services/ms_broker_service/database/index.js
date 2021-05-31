const {
    getFromDBFile,
    addToDBFile,
} = require('./utils');

class MSBrokerDatabase {
    constructor() {
        this.servicesList = getFromDBFile() || {};
    }
    targetExists = (serviceName) => !!this.servicesList[serviceName]
    syncWithFile = () => addToDBFile(this.servicesList)

    getServiceData = (serviceName) => this.servicesList[serviceName] || {}
    registerService = (serviceData = {}) => {
        const { name: serviceName } = serviceData;
        if (serviceName) {
            this.servicesList[serviceName] = serviceData;
            this.syncWithFile();
            return this.servicesList[serviceName];
        }
        return {};
    }
}

const msBrokerDB = new MSBrokerDatabase();

module.exports = {
    msBrokerDB,
};