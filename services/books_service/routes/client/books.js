const {
    ALL_BOOKS_URL,
} = require('../constants');
const {
    ALL_BOOKS_PAGE,
} = require('./constants');
const { pageTemplateData } = require('./navigation-data');

const addBooksRoutes = ({ booksClientRouter }, {}, booksDB) => {

    booksClientRouter.get(ALL_BOOKS_URL, (_, res) => {
        // const allBooks = booksDB.getAllBooks();
        res.render(ALL_BOOKS_PAGE, pageTemplateData[ALL_BOOKS_PAGE]);
    });
};

module.exports = {
    addBooksRoutes,
};