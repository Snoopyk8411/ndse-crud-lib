const {
    addPluginsTo,
    startListenToPort,
    createServerAppInstance,
} = require('./utils');
const {
    initAPI,
} = require('./api');
const { booksDB } = require('./database');

const initBooksServer = (_, isStylish) => {
    const { serverApp } = createServerAppInstance();
    addPluginsTo(serverApp);
    initAPI(serverApp, booksDB);
    startListenToPort(serverApp, isStylish);
};

module.exports = {
    initBooksServer,
};