const {
    MS_BROKER_API_ROUTE,
} = require('../constants');
const { initRouter } = require('../utils');

const { addGetAPI } = require('./get');
const { addPostAPI } = require('./post');


const mountRoutersToApp = (serverApp, routers) => {
    const { msBrokerAPIRouter } = routers;
    serverApp.use(MS_BROKER_API_ROUTE, msBrokerAPIRouter);
};

const initAPI = ({ serverApp, _, msBrokerDB }) => {
    const msBrokerAPIRouter = initRouter();
    addGetAPI({ msBrokerAPIRouter }, {}, msBrokerDB);
    addPostAPI({ msBrokerAPIRouter }, {}, msBrokerDB);
    mountRoutersToApp(serverApp, { msBrokerAPIRouter });
};

module.exports = {
    initAPI,
};