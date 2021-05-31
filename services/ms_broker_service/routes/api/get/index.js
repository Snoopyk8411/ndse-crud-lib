const {
    TARGET_SERVICE_URL,
} = require('../../constants');

const addGetAPI = ({ msBrokerAPIRouter }, {}, msBrokerDB) => {
    msBrokerAPIRouter.get(TARGET_SERVICE_URL, (req, res) => {
        const { name } = req.params;
        const serviceData = msBrokerDB.getServiceData(name);
        res.json(serviceData);
    });
};

module.exports = {
    addGetAPI,
};