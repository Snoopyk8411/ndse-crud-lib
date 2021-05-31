const { initBooksService, BOOKS_SERVICE_NAME } = require('./books_service');
const { initCounterService, COUNTER_SERVICE_NAME } = require('./counter_service');
const { initMSBrokerService, MS_BROKER_SERVICE_NAME } = require('./ms_broker_service');

const initors = {
    [BOOKS_SERVICE_NAME]: initBooksService,
    [COUNTER_SERVICE_NAME]: initCounterService,
    [MS_BROKER_SERVICE_NAME]: initMSBrokerService,
};
const initorsList = [BOOKS_SERVICE_NAME, COUNTER_SERVICE_NAME];

module.exports = {
    initors,
    initorsList,
};