const BASE_URL = '/';
const BASE_PART = '/api/';
const UID_PARAM = ':name';
// ---
const MS_BROKER_SEG = 'ms_broker';
// ---
const SUCCESS_CODE = 201;
const NOT_FOUND_CODE = 404;
const SERVER_ERR_CODE = 500;
const NOT_FOUND_MESSAGE = 'Error: Not found';
const SERVER_ERR_MESSAGE = 'Error: Something went wrong'
const ERROR_STACK_MESSAGE = 'Error stack:';
const REQUEST_BODY_MESSAGE = 'Request body:';
// ---
const MS_BROKER_API_ROUTE = `${BASE_PART}${MS_BROKER_SEG}`;
const ADD_SERVICE_URL = `${BASE_URL}`;
const TARGET_SERVICE_URL = `${BASE_URL}${UID_PARAM}`;

module.exports = {
    BASE_URL,
    UID_PARAM,
    SUCCESS_CODE,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
    SERVER_ERR_CODE,
    SERVER_ERR_MESSAGE,
    ERROR_STACK_MESSAGE,
    REQUEST_BODY_MESSAGE,
    MS_BROKER_API_ROUTE,
    ADD_SERVICE_URL,
    TARGET_SERVICE_URL,
};
