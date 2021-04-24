const {
    ALL_BOOKS_URL,
    LOGIN_URL,
    SUCCESS_CODE,
    DEFAULT_LOGIN_OBJECT,
} = require('../constants');

const initPostAPI = (serverApp, booksDB) => {
    serverApp.post(LOGIN_URL, (_, res) => {
        res.status(SUCCESS_CODE);
        res.json(DEFAULT_LOGIN_OBJECT);
    });
    
    serverApp.post(ALL_BOOKS_URL, (req, res) => {
        const bookData = req.body;
        const newBookRecord = booksDB.saveNewBook(bookData);
        res.status(SUCCESS_CODE);
        res.json(newBookRecord);
    });
};

module.exports = {
    initPostAPI,
};