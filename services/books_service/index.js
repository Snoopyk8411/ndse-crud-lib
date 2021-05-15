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
    initClient,
} = require('./routes');
const { booksDB } = require('./database');

const initBooksService = (_, isStylish) => {
    const { serverApp } = createServerAppInstance();
    const { handleFile } = addPluginsTo(serverApp);
    initAPI({ serverApp, handleFile, booksDB });
    initClient({ serverApp, booksDB });
    addErrorHandlingTo(serverApp);
    startListenToPort(serverApp, isStylish);
};

module.exports = {
    initBooksService,
};