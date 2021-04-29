const {
    startListenToPort,
    createServerAppInstance,
} = require('./utils');
const {
    addPluginsTo,
    addErrorHandlingTo,
} = require('./middlewares');
const {
    initAPI,
} = require('./api');
const { booksDB } = require('./database');

const initBooksService = (_, isStylish) => {
    const { serverApp } = createServerAppInstance();
    const { handleFile } = addPluginsTo(serverApp);
    initAPI({ serverApp, handleFile, booksDB });
    addErrorHandlingTo(serverApp);
    startListenToPort(serverApp, isStylish);
};

module.exports = {
    initBooksService,
};