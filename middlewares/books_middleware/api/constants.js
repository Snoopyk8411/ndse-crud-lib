const BASE_PART = '/api/';
const UID_PARAM = '/:id';
// ---
const USER_SEG = 'user';
const BOOK_SEG = 'books';
// ---
const SUCCESS_CODE = 201;
const NOT_FOUND_CODE = 404;
const NOT_FOUND_MESSAGE = 'Error: Data not found';
// ---
const LOGIN_URL = `${BASE_PART}${USER_SEG}/login`;
const ALL_BOOKS_URL = `${BASE_PART}${BOOK_SEG}`;
const TARGET_BOOK_URL = `${ALL_BOOKS_URL}${UID_PARAM}`;

const DEFAULT_LOGIN_OBJECT = {
    id: 1,
    mail: "test@mail.ru",
};

module.exports = {
    LOGIN_URL,
    ALL_BOOKS_URL,
    TARGET_BOOK_URL,
    SUCCESS_CODE,
    NOT_FOUND_CODE,
    DEFAULT_LOGIN_OBJECT,
    NOT_FOUND_MESSAGE,
};
