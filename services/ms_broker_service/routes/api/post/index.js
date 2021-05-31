const {
    ADD_SERVICE_URL,
} = require('../../constants');
const { handleSuccess } = require('../../utils');

const addPostAPI = ({ msBrokerAPIRouter }, {}, msBrokerDB) => {
    msBrokerAPIRouter.post(ADD_SERVICE_URL, (req, res) => {
        const serviceData = req.body;

        const newServiceData = msBrokerDB.registerService(serviceData);
        handleSuccess(res, newServiceData);
    });
};

module.exports = {
    addPostAPI,
};