const { PATH_TO_BOOKS_STATIC } = require('../constants');
const BASE_URL = '/';
const BASE_PART = '/api/';
const UID_PARAM = ':id';
const UPLOAD = '/upload';
const DOWNLOAD = '/download';
// ---
const CREATE = '/create/';
const UPDATE = '/update/';
const DELETE = '/delete/';
// ---
const BOOK_UPLOAD_FIELD_NAME = 'fileBook';
// ---
const USER_SEG = 'user';
const BOOK_SEG = 'books';
// ---
const SUCCESS_CODE = 201;
const NOT_FOUND_CODE = 404;
const SERVER_ERR_CODE = 500;
const NOT_FOUND_MESSAGE = 'Error: Not found';
const SERVER_ERR_MESSAGE = 'Error: Something went wrong'
const ERROR_STACK_MESSAGE = 'Error stack:';
const REQUEST_BODY_MESSAGE = 'Request body:';
// ---
const LOGIN_API_ROUTE = `${BASE_PART}${USER_SEG}`;
const LOGIN_URL = `/login`;

const NOT_FOUND_URL = '/404';

const SERVICE_CLIENT_ROUTE = BASE_URL;

const ALL_BOOKS_URL = BASE_URL;
const BOOKS_API_ROUTE = `${BASE_PART}${BOOK_SEG}`;
const BOOKS_CLIENT_ROUTE = `${ALL_BOOKS_URL}${BOOK_SEG}`;
const ALL_BOOKS_REDIRECT = BOOKS_CLIENT_ROUTE;
const TARGET_BOOK_URL = `${ALL_BOOKS_URL}${UID_PARAM}`;
const TARGET_BOOK_UPLOAD_URL = `${TARGET_BOOK_URL}${UPLOAD}`;
const TARGET_BOOK_DOWNLOAD_URL = `${TARGET_BOOK_URL}${DOWNLOAD}`;

const DEFAULT_LOGIN_OBJECT = {
    id: 1,
    mail: "test@mail.ru",
};

module.exports = {
    BASE_URL,
    NOT_FOUND_URL,
    UID_PARAM,
    CREATE,
    UPDATE,
    DELETE,
    PATH_TO_BOOKS_STATIC,
    LOGIN_API_ROUTE,
    LOGIN_URL,
    BOOKS_API_ROUTE,
    BOOKS_CLIENT_ROUTE,
    ALL_BOOKS_REDIRECT,
    SERVICE_CLIENT_ROUTE,
    ALL_BOOKS_URL,
    TARGET_BOOK_URL,
    TARGET_BOOK_UPLOAD_URL,
    TARGET_BOOK_DOWNLOAD_URL,
    BOOK_UPLOAD_FIELD_NAME,
    SUCCESS_CODE,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
    DEFAULT_LOGIN_OBJECT,
    SERVER_ERR_CODE,
    SERVER_ERR_MESSAGE,
    ERROR_STACK_MESSAGE,
    REQUEST_BODY_MESSAGE,
};
