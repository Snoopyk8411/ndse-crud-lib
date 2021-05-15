const {
    BOOKS_CLIENT_ROUTE,
    SERVICE_CLIENT_ROUTE,
} = require('../constants');
const { initRouter } = require('../utils');
const { addBooksRoutes } = require('./books');
const { addServiceRoutes } = require('./service');

const mountRoutersToApp = (serverApp, routers) => {
    const { booksClientRouter, serviceClientRouter } = routers;
    serverApp.use(SERVICE_CLIENT_ROUTE, serviceClientRouter);
    serverApp.use(BOOKS_CLIENT_ROUTE, booksClientRouter);
};

const initClient = ({ serverApp, booksDB }) => {
    const booksClientRouter = initRouter();
    const serviceClientRouter = initRouter();
    addServiceRoutes({ serviceClientRouter }, {}, {});
    addBooksRoutes({ booksClientRouter }, {}, booksDB);
    mountRoutersToApp(serverApp, { booksClientRouter, serviceClientRouter });
};

module.exports = {
    initClient,
};