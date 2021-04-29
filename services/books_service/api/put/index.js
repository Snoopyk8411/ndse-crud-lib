const {
    TARGET_BOOK_URL,
} = require('../constants');
const { handleNotFound } = require('../utils');

const addPutAPI = ({ booksAPIRouter }, {}, booksDB) => {
    booksAPIRouter.put(TARGET_BOOK_URL, (req, res) => {
        const bookData = req.body;
        const { id } = req.params;

        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const updatedBookRecord = booksDB.updateRecord(id, bookData);
            res.json(updatedBookRecord);
        } else {
            handleNotFound(res);
        }
    });
};

module.exports = {
    addPutAPI,
};