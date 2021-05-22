const path = require('path');
// ---
const { HEADER_USER_AGENT, STATIC_DIR_PATH } = require('../constants');
const BOOKS_SERVICE_NAME = 'books';
// for fs purposes
const MOVE_TO_ROOT_PATH = ['..', '..'];
const STATIC_BOOKS_DIR_PATH = [STATIC_DIR_PATH, BOOKS_SERVICE_NAME];
const PATH_TO_STATIC = path.join(__dirname, ...MOVE_TO_ROOT_PATH, STATIC_DIR_PATH);
const PATH_TO_BOOKS_STATIC = path.join(__dirname, ...MOVE_TO_ROOT_PATH, ...STATIC_BOOKS_DIR_PATH);

module.exports = {
    BOOKS_SERVICE_NAME,
    HEADER_USER_AGENT,
    MOVE_TO_ROOT_PATH,
    STATIC_DIR_PATH,
    STATIC_BOOKS_DIR_PATH,
    PATH_TO_STATIC,
    PATH_TO_BOOKS_STATIC,
};