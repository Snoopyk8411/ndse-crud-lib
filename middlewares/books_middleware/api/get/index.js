const {
    ALL_BOOKS_URL,
    TARGET_BOOK_URL,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
} = require('../constants');

const initGetAPI = (serverApp, booksDB) => {
    serverApp.get(ALL_BOOKS_URL, (_, res) => {
        const allBooks = booksDB.getAllBooks();
        res.json(allBooks);
    });
    
    serverApp.get(TARGET_BOOK_URL, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            res.json(booksDB.getTargetBook(id));
        } else {
            res.status(NOT_FOUND_CODE);
            res.json(NOT_FOUND_MESSAGE);
        }
    });
};

module.exports = {
    initGetAPI,
};