const {
    ALL_BOOKS_URL,
    TARGET_BOOK_URL,
    TARGET_BOOK_DOWNLOAD_URL,
} = require('../constants');
const {
    handleNotFound,
    getFilePath,
} = require('../utils');

const addGetAPI = ({ booksAPIRouter }, {}, booksDB) => {
    booksAPIRouter.get(ALL_BOOKS_URL, (_, res) => {
        const allBooks = booksDB.getAllBooks();
        res.json(allBooks);
    });
    
    booksAPIRouter.get(TARGET_BOOK_URL, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            res.json(booksDB.getTargetBook(id));
        } else {
            handleNotFound(res);
        }
    });

    booksAPIRouter.get(TARGET_BOOK_DOWNLOAD_URL, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);

        if (dbHasCurrentBook) {
            const { fileBook } = booksDB.getTargetBook(id);
            
            res.download(`${getFilePath(fileBook)}`, 'cover.png', err => {
                if (err) handleNotFound(res);
            });
        } else {
            handleNotFound(res);
        }
    });
};

module.exports = {
    addGetAPI,
};