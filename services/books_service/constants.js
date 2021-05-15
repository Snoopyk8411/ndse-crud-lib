const path = require('path');
// ---
const SERVER_PORT = process.env.PORT || 3000;
// ---
const SUCCESS_START_MES = 'Server is running on port';
const SUCCESS_START_STY_MES = 'You patronum shining on:';
// ---
const HEADER_USER_AGENT = 'user-agent';
// for fs purposes
const MOVE_TO_ROOT_PATH = ['..', '..'];
const STATIC_DIR_PATH = 'static';
const STATIC_BOOKS_DIR_PATH = [STATIC_DIR_PATH, 'books'];
const PATH_TO_STATIC = path.join(__dirname, ...MOVE_TO_ROOT_PATH, STATIC_DIR_PATH);
const PATH_TO_BOOKS_STATIC = path.join(__dirname, ...MOVE_TO_ROOT_PATH, ...STATIC_BOOKS_DIR_PATH);

module.exports = {
    SERVER_PORT,
    SUCCESS_START_MES,
    SUCCESS_START_STY_MES,
    HEADER_USER_AGENT,
    MOVE_TO_ROOT_PATH,
    STATIC_DIR_PATH,
    STATIC_BOOKS_DIR_PATH,
    PATH_TO_STATIC,
    PATH_TO_BOOKS_STATIC,
};