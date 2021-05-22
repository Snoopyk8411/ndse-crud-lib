const {
    COUNTER_API_ROUTE,
} = require('../constants');
const { initRouter } = require('../utils');

const { addGetAPI } = require('./get');
const { addPostAPI } = require('./post');


const mountRoutersToApp = (serverApp, routers) => {
    const { counterAPIRouter } = routers;
    serverApp.use(COUNTER_API_ROUTE, counterAPIRouter);
};

const initAPI = ({ serverApp, _, counterDB }) => {
    const counterAPIRouter = initRouter();
    addGetAPI({ counterAPIRouter }, {}, counterDB);
    addPostAPI({ counterAPIRouter }, {}, counterDB);
    mountRoutersToApp(serverApp, { counterAPIRouter });
};

module.exports = {
    initAPI,
};