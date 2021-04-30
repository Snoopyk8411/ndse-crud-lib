const {
    TARGET_BOOK_URL,
    TARGET_BOOK_UPLOAD_URL,
    BOOK_UPLOAD_FIELD_NAME,
} = require('../constants');
const { handleNotFound } = require('../utils');

const addPutAPI = ({ booksAPIRouter }, { handleFile }, booksDB) => {
    booksAPIRouter.put(TARGET_BOOK_URL, handleFile.single(BOOK_UPLOAD_FIELD_NAME), (req, res) => {
        const { id } = req.params;

        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const bookData = req.body;
            const { filename: fileBook } = req.file || {};

            const updatedBookRecord = booksDB.updateRecord(id, { ...bookData, fileBook });
            res.json(updatedBookRecord);
        } else {
            handleNotFound(res);
        }
    });

    booksAPIRouter.put(TARGET_BOOK_UPLOAD_URL, handleFile.single(BOOK_UPLOAD_FIELD_NAME), (req, res) => {
        const { id } = req.params;

        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const { filename } = req.file || {};
            const bookRecordDataWithLink = booksDB.updateBookRecordFileLink(id, filename);
            res.json(bookRecordDataWithLink);
        } else {
            handleNotFound(res);
        }
    });
};

module.exports = {
    addPutAPI,
};