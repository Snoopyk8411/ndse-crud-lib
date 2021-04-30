const {
    BOOKS_API_ROUTE,
    LOGIN_API_ROUTE,
} = require('./constants');
const { initRouters } = require('./utils');

const { addGetAPI } = require('./get');
const { addPostAPI } = require('./post');
const { addPutAPI } = require('./put');
const { addDeleteAPI } = require('./delete');


const mountRoutersToApp = (serverApp, routers) => {
    const { booksAPIRouter, loginAPIRouter } = routers;
    serverApp.use(BOOKS_API_ROUTE, booksAPIRouter);
    serverApp.use(LOGIN_API_ROUTE, loginAPIRouter);
};

const initAPI = ({ serverApp, handleFile, booksDB }) => {
    const { booksAPIRouter, loginAPIRouter } = initRouters();
    addGetAPI({ booksAPIRouter }, {}, booksDB);
    addPostAPI({ booksAPIRouter, loginAPIRouter }, { handleFile }, booksDB);
    addPutAPI({ booksAPIRouter }, { handleFile }, booksDB);
    addDeleteAPI({ booksAPIRouter }, {}, booksDB);
    mountRoutersToApp(serverApp, { booksAPIRouter, loginAPIRouter });
};

module.exports = {
    initAPI,
};