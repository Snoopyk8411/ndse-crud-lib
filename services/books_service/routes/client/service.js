const {
    BASE_URL,
    NOT_FOUND_URL,
} = require('../constants');
const {
    MAIN_PAGE,
    NOT_FOUND_PAGE,
} = require('./constants');
const { pageTemplateData } = require('./navigation-data');

const addServiceRoutes = ({ serviceClientRouter }, {}, {}) => {
    serviceClientRouter.get(BASE_URL, (_, res) => {
        res.render(MAIN_PAGE, pageTemplateData[MAIN_PAGE]);
    });
    serviceClientRouter.get(NOT_FOUND_URL, (_, res) => {
        res.render(NOT_FOUND_PAGE, pageTemplateData[NOT_FOUND_PAGE]);
    });
};

module.exports = {
    addServiceRoutes,
};