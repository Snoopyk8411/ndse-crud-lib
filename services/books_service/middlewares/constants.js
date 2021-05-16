const {
    PATH_TO_BOOKS_STATIC,
} = require('../constants');
// ---
const IMAGE_MIME_TYPES = [];
const MIME_TYPES_BLACK_LIST = [...IMAGE_MIME_TYPES];
// ---
const BODY_PARSE_CONFIG = { limit: '100mb', extended: false };
const VIEW_ENGINE_CONFIG = ['view engine', 'ejs'];

module.exports = {
    MIME_TYPES_BLACK_LIST,
    PATH_TO_BOOKS_STATIC,
    BODY_PARSE_CONFIG,
    VIEW_ENGINE_CONFIG,
};