const {
    BASE_URL,
} = require('../constants');
const {
    MAIN_PAGE,
} = require('./constants');
const { pageTemplateData } = require('./navigation-data');

const addServiceRoutes = ({ serviceClientRouter }, {}, {}) => {
    serviceClientRouter.get(BASE_URL, (_, res) => {
        res.render(MAIN_PAGE, pageTemplateData[MAIN_PAGE]);
    });
};

module.exports = {
    addServiceRoutes,
};