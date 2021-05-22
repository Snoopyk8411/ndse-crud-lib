const {
    TARGET_COUNTER_URL,
} = require('../../constants');

const addGetAPI = ({ counterAPIRouter }, {}, counterDB) => {
    counterAPIRouter.get(TARGET_COUNTER_URL, (req, res) => {
        const { id } = req.params;
        const targetCount = counterDB.getTargetCount(id);
        const currentCount = { count: targetCount };
        res.json(currentCount);
    });
};

module.exports = {
    addGetAPI,
};