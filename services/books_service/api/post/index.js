const {
    ALL_BOOKS_URL,
    LOGIN_URL,
    BOOK_UPLOAD_FIELD_NAME,
    DEFAULT_LOGIN_OBJECT,
} = require('../constants');
const { handleNotFound, handleSuccessCreated } = require('../utils');

const addPostAPI = ({ booksAPIRouter, loginAPIRouter }, { handleFile }, booksDB) => {
    loginAPIRouter.post(LOGIN_URL, (_, res) => {
        handleSuccessCreated(res, DEFAULT_LOGIN_OBJECT);
    });
    
    booksAPIRouter.post(ALL_BOOKS_URL, handleFile.single(BOOK_UPLOAD_FIELD_NAME), (req, res) => {
        const bookData = req.body;
        const { filename: fileBook = '' } = req.file || {};
        const newBookRecord = booksDB.saveNewBook({ ...bookData, fileBook });
        handleSuccessCreated(res, newBookRecord);
    });
};

module.exports = {
    addPostAPI,
};