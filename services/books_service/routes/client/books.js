const {
    ALL_BOOKS_URL,
    ALL_BOOKS_REDIRECT,
    TARGET_BOOK_URL,
    CREATE,
    UPDATE,
    DELETE,
    UID_PARAM,
    BOOK_UPLOAD_FIELD_NAME,
} = require('../constants');
const {
    ALL_BOOKS_PAGE,
    CREATE_BOOK_PAGE,
    VIEW_BOOK_PAGE,
    UPDATE_BOOK_PAGE,
} = require('./constants');
const { handleNotFoundRedirect } = require('./utils');
const { pageTemplateData } = require('./navigation-data');

const addBooksRoutes = ({ booksClientRouter }, { handleFile, plugins }, booksDB) => {
    // create
    booksClientRouter.get(`${CREATE}`, (req, res) => {
        const bookCreationTemplate = {
            ...pageTemplateData[CREATE_BOOK_PAGE],
        }
        bookCreationTemplate.content.book = booksDB.getEmptyTemplate();

        res.render(CREATE_BOOK_PAGE, bookCreationTemplate);
    });
    booksClientRouter.post(CREATE, handleFile.single(BOOK_UPLOAD_FIELD_NAME), (req, res) => {
        const bookData = req.body;
        const { filename: fileBook = '' } = req.file || {};
        booksDB.saveNewBook({ ...bookData, fileBook });
        res.redirect(ALL_BOOKS_REDIRECT);
    });
    // get
    booksClientRouter.get(ALL_BOOKS_URL, (_, res) => {
        const allBooks = booksDB.getAllBooks();
        const allBooksTemplateData = {
            ...pageTemplateData[ALL_BOOKS_PAGE],
            content: {
                books: allBooks,
            },
        };
        res.render(ALL_BOOKS_PAGE, allBooksTemplateData);
    });
    booksClientRouter.get(TARGET_BOOK_URL, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const { getRequestUrl, injectServiceHost, counterPlugin } = plugins;
            const counterServiceName = counterPlugin.getServiceName();
            injectServiceHost(
                getRequestUrl(req),
                counterServiceName,
                counterPlugin.getCounter)
                .then((counter) => {
                    counter.getBookWatchCount(id, (count) => {
                        // ---
                        const viewTemplateData = {
                            ...pageTemplateData[VIEW_BOOK_PAGE]
                        };
                        viewTemplateData.content = {
                            ...viewTemplateData.content,
                            book: booksDB.getTargetBook(id),
                            count: count,
                        };
                        res.render(VIEW_BOOK_PAGE, viewTemplateData);
                        counter.updateWatchCount(id);
                    });
                });
        } else {
            handleNotFoundRedirect(res);
        }
    });
    // update
    booksClientRouter.get(`${UPDATE}${UID_PARAM}`, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const viewTemplateData = {
                ...pageTemplateData[UPDATE_BOOK_PAGE],
            };
            viewTemplateData.content.book = booksDB.getTargetBook(id);

            res.render(UPDATE_BOOK_PAGE, viewTemplateData);
        } else {
            handleNotFoundRedirect(res);
        }
    });
    booksClientRouter.post(`${UPDATE}${UID_PARAM}`, handleFile.single(BOOK_UPLOAD_FIELD_NAME), (req, res) => {
        const { id } = req.params;

        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            const bookData = req.body;
            const { filename: fileBook } = req.file || {};

            booksDB.updateRecord(id, { ...bookData, fileBook });
            res.redirect(`${ALL_BOOKS_REDIRECT}/${id}`);
        } else {
            handleNotFoundRedirect(res);
        }
    });
    // delete
    booksClientRouter.post(`${DELETE}${UID_PARAM}`, (req, res) => {
        const { id } = req.params;
        const dbHasCurrentBook = booksDB.dbHasTargetRecord(id);
    
        if (dbHasCurrentBook) {
            booksDB.deleteRecord(id);
            res.redirect(ALL_BOOKS_REDIRECT);
        } else {
            handleNotFoundRedirect(res);
        }
    });
};

module.exports = {
    addBooksRoutes,
};