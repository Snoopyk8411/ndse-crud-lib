const path = require('path');
const { HEADER_USER_AGENT, STATIC_DIR_PATH } = require('../constants');
// for fs purposes
const MOVE_TO_ROOT_PATH = ['..', '..'];
const COUNTER_SERVICE_NAME = 'counter';
const STATIC_COUNTER_DIR_PATH = [STATIC_DIR_PATH, COUNTER_SERVICE_NAME];
const PATH_TO_COUNTER_STATIC = path.join(__dirname, ...MOVE_TO_ROOT_PATH, ...STATIC_COUNTER_DIR_PATH);

module.exports = {
    HEADER_USER_AGENT,
    PATH_TO_COUNTER_STATIC,
    COUNTER_SERVICE_NAME,
};