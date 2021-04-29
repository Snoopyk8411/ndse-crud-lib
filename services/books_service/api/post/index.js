const {
    ALL_BOOKS_URL,
    LOGIN_URL,
    TARGET_BOOK_UPLOAD_URL,
    BOOK_UPLOAD_FIELD_NAME,
    DEFAULT_LOGIN_OBJECT,
} = require('../constants');
const { handleNotFound, handleSuccessCreated } = require('../utils');

const addPostAPI = ({ booksAPIRouter, loginAPIRouter }, { handleFile }, booksDB) => {
    loginAPIRouter.post(LOGIN_URL, (_, res) => {
        handleSuccessCreated(res, DEFAULT_LOGIN_OBJECT);
    });
    
    booksAPIRouter.post(ALL_BOOKS_URL, (req, res) => {
        const bookData = req.body;
        const newBookRecord = booksDB.saveNewBook(bookData);
        handleSuccessCreated(res, newBookRecord);
    });

    booksAPIRouter.post(TARGET_BOOK_UPLOAD_URL, handleFile.single(BOOK_UPLOAD_FIELD_NAME), (req, res) => {
        const { id } = req.params;

        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const { filename } = req.file || {};
            const bookRecordDataWithLink = booksDB.updateBookRecordFileLink(id, filename);
            handleSuccessCreated(res, bookRecordDataWithLink);
        } else {
            handleNotFound(res);
        }
    });
};

module.exports = {
    addPostAPI,
};