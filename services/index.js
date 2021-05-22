const { initBooksService, BOOKS_SERVICE_NAME } = require('./books_service');
const { initCounterService, COUNTER_SERVICE_NAME } = require('./counter_service');

const initors = {
    [BOOKS_SERVICE_NAME]: initBooksService,
    [COUNTER_SERVICE_NAME]: initCounterService,
};
const initorsList = [BOOKS_SERVICE_NAME, COUNTER_SERVICE_NAME];

module.exports = {
    initors,
    initorsList,
};