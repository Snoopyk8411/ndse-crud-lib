const {
    TARGET_BOOK_URL,
} = require('../../constants');
const { handleNotFound } = require('../../utils');

const addDeleteAPI = ({ booksAPIRouter }, {}, booksDB) => {
    booksAPIRouter.delete(TARGET_BOOK_URL, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const operationResult = booksDB.deleteRecord(id);
            res.json(operationResult);
        } else {
            handleNotFound(res);
        }
    });
};

module.exports = {
    addDeleteAPI,
};