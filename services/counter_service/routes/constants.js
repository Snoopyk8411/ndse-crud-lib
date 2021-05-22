const BASE_URL = '/';
const BASE_PART = '/api/';
const UID_PARAM = ':id';
// ---
const COUNTER_SEG = 'counter';
// ---
const SUCCESS_CODE = 201;
const NOT_FOUND_CODE = 404;
const SERVER_ERR_CODE = 500;
const NOT_FOUND_MESSAGE = 'Error: Not found';
const SERVER_ERR_MESSAGE = 'Error: Something went wrong'
const ERROR_STACK_MESSAGE = 'Error stack:';
const REQUEST_BODY_MESSAGE = 'Request body:';
// ---
const INCREMENT = `${BASE_URL}incr`;
const COUNTER_API_ROUTE = `${BASE_PART}${COUNTER_SEG}`;
const COUNTER_INCREMENT_URL = `${BASE_URL}${UID_PARAM}${INCREMENT}`
const TARGET_COUNTER_URL = `${BASE_URL}${UID_PARAM}`;

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
    COUNTER_API_ROUTE,
    COUNTER_INCREMENT_URL,
    TARGET_COUNTER_URL,
};
