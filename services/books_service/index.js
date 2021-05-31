const {
    startListenToPort,
    createServerAppInstance,
} = require('../utils');
const {
    addMiddlewaresTo,
    addErrorHandlingTo,
} = require('./middlewares');
const { plugins } = require('./plugins');
const {
    initAPI,
    initClient,
} = require('./routes');
const { booksDB } = require('./database');
const { BOOKS_SERVICE_NAME } = require('./constants');

const initBooksService = (initData) => {
    const { serverApp } = createServerAppInstance();
    const { handleFile } = addMiddlewaresTo(serverApp);
    initAPI({ serverApp, handleFile, booksDB });
    initClient({ serverApp, handleFile, booksDB, plugins });
    addErrorHandlingTo(serverApp);
    startListenToPort(serverApp, initData);
};

module.exports = {
    BOOKS_SERVICE_NAME,
    initBooksService,
};