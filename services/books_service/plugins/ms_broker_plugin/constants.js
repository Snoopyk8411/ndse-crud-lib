const SERVER_PORT = process.env.PORT || 3000;
const TECH_PORT_STEP = 1000;
const TECH_PORT = SERVER_PORT - TECH_PORT_STEP;

const BASE_PART = '/api/';
const MS_BROKER_SERVICE_NAME = 'ms_broker';

const MS_BROKER_CALL_URL = `${BASE_PART}${MS_BROKER_SERVICE_NAME}/`;

module.exports = {
    MS_BROKER_CALL_URL,
    TECH_PORT,
    SERVER_PORT,
};