const { initGetAPI } = require('./get');
const { initPostAPI } = require('./post');
const { initPutAPI } = require('./put');
const { initDeleteAPI } = require('./delete');

const initAPI = (serverApp, booksDB) => {
    initGetAPI(serverApp, booksDB);
    initPostAPI(serverApp, booksDB);
    initPutAPI(serverApp, booksDB);
    initDeleteAPI(serverApp, booksDB);
};

module.exports = {
    initAPI,
};