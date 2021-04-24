const {
    TARGET_BOOK_URL,
    NOT_FOUND_CODE,
    NOT_FOUND_MESSAGE,
} = require('../constants');

const initDeleteAPI = (serverApp, booksDB) => {
    serverApp.delete(TARGET_BOOK_URL, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const operationResult = booksDB.deleteRecord(id);
            res.json(operationResult);
        } else {
            res.status(NOT_FOUND_CODE);
            res.json(NOT_FOUND_MESSAGE);
        }
    });
};

module.exports = {
    initDeleteAPI,
};