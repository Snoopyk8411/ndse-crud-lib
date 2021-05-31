const {
    BOOKS_CLIENT_ROUTE,
    SERVICE_CLIENT_ROUTE,
} = require('../constants');
const { initRouter } = require('../utils');
const { addBooksRoutes } = require('./books');
const { addServiceRoutes } = require('./service');
const { } = require('../')

const mountRoutersToApp = (serverApp, routers) => {
    const { booksClientRouter, serviceClientRouter } = routers;
    serverApp.use(SERVICE_CLIENT_ROUTE, serviceClientRouter);
    serverApp.use(BOOKS_CLIENT_ROUTE, booksClientRouter);
};

const initClient = ({ serverApp, handleFile, booksDB, plugins }) => {
    const booksClientRouter = initRouter();
    const serviceClientRouter = initRouter();
    addServiceRoutes({ serviceClientRouter }, {}, {});
    addBooksRoutes({ booksClientRouter }, { handleFile, plugins }, booksDB);
    mountRoutersToApp(serverApp, { booksClientRouter, serviceClientRouter });
};

module.exports = {
    initClient,
};