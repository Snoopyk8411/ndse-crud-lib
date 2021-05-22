const {
    COUNTER_INCREMENT_URL,
} = require('../../constants');
const { handleSuccess } = require('../../utils');

const addPostAPI = ({ counterAPIRouter }, {}, counterDB) => {
    counterAPIRouter.post(COUNTER_INCREMENT_URL, (req, res) => {
        const { id } = req.params;

        const newCountValue = counterDB.incrementTargetCount(id);
        const newCount = { count: newCountValue };
        handleSuccess(res, newCount);
    });
};

module.exports = {
    addPostAPI,
};