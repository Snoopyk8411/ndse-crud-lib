const path = require('path');
const { HEADER_USER_AGENT, STATIC_DIR_PATH, BROKER_PATTERN } = require('../constants');
// ---
const TECH_PORT_STEP = 1000;
// for fs purposes
const MOVE_TO_ROOT_PATH = ['..', '..'];
const MS_BROKER_SERVICE_NAME = 'ms_broker';
const STATIC_MS_BROKER_DIR_PATH = [STATIC_DIR_PATH, MS_BROKER_SERVICE_NAME];
const PATH_TO_MS_BROKER_STATIC = path.join(__dirname, ...MOVE_TO_ROOT_PATH, ...STATIC_MS_BROKER_DIR_PATH);

const RUNNABLE_SERVICES = 'runServices';
const SERVICE_KEY = 'service';

module.exports = {
    HEADER_USER_AGENT,
    PATH_TO_MS_BROKER_STATIC,
    MS_BROKER_SERVICE_NAME,
    RUNNABLE_SERVICES,
    SERVICE_KEY,
    TECH_PORT_STEP,
    BROKER_PATTERN,
};