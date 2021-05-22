const {
    startListenToPort,
    createServerAppInstance,
} = require('../utils');
const {
    addPluginsTo,
    addErrorHandlingTo,
} = require('./middlewares');
const {
    initAPI,
    initClient,
} = require('./routes');
const { booksDB } = require('./database');
const { BOOKS_SERVICE_NAME } = require('./constants');

const initBooksService = (initData) => {
    const { serverApp } = createServerAppInstance();
    const { handleFile } = addPluginsTo(serverApp);
    initAPI({ serverApp, handleFile, booksDB });
    initClient({ serverApp, handleFile, booksDB });
    addErrorHandlingTo(serverApp);
    startListenToPort(serverApp, initData);
};

module.exports = {
    BOOKS_SERVICE_NAME,
    initBooksService,
};