const SERVER_PORT = process.env.PORT || 3000;
const PORT_STEP = 10;
// errors
const ERROR = 'error';
const ERROR_CODE_PORT_BUSY = 'EADDRINUSE';
// ---
const SUCCESS_START_MES = ['Service name:', 'Server is running on port'];
const SUCCESS_START_STY_MES = ['You patronum is', 'You patronum shining on:'];

const ANOTHER_PORT_MES = 'Restarting Server on another port:';
// ---
const HEADER_USER_AGENT = 'user-agent';

const STATIC_DIR_PATH = 'static';

module.exports = {
    SERVER_PORT,
    PORT_STEP,
    ERROR,
    ERROR_CODE_PORT_BUSY,
    SUCCESS_START_MES,
    SUCCESS_START_STY_MES,
    ANOTHER_PORT_MES,
    HEADER_USER_AGENT,
    STATIC_DIR_PATH,
};