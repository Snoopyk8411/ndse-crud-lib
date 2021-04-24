const {
    TARGET_BOOK_URL,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
} = require('../constants');

const initPutAPI = (serverApp, booksDB) => {
    serverApp.put(TARGET_BOOK_URL, (req, res) => {
        const bookData = req.body;
        const { id } = req.params;

        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const updatedBookRecord = booksDB.updateRecord(id, bookData);
            res.json(updatedBookRecord);
        } else {
            res.status(NOT_FOUND_CODE);
            res.json(NOT_FOUND_MESSAGE);
        }
    });
};

module.exports = {
    initPutAPI,
};