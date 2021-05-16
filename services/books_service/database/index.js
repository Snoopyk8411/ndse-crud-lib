const uidGenerator = require('node-unique-id-generator');
const {
    DEFAULT_RECORD_DATA,
    SUCCESS_OPERATION,
} = require('./constants');
const { booksStartMock } = require('./mocks');
const { deleteAttachment } = require('./utils');

class BooksDatabase {
    constructor() {
        this.booksList = booksStartMock || {};
    }
    createBookTemplate = () => {
        return {
            id: uidGenerator.generateUniqueId(),
            ...DEFAULT_RECORD_DATA,
        };
    }
    getEmptyTemplate = () => DEFAULT_RECORD_DATA

    isDBEmpty = () => this.booksList.length === 0
    dbHasTargetRecord = (bookId) => !!this.booksList[bookId]

    getAllBooks = () => {
        let booksMap = [];
        const dbNotEmpty = !this.isDBEmpty();

        if (dbNotEmpty) {
            booksMap = Object.keys(this.booksList).map((bookId) => this.booksList[bookId]);
        }
        return booksMap;
    }
    getTargetBook = (bookId) => this.booksList[bookId]
    addDataToRecord = (bookId, data) => {
        this.booksList[bookId] = data;
    }
    addNewRecord = (bookId) => {
        this.booksList[bookId] = {};
    }
    updateRecord = (bookId, newData) => {
        const prevData = this.booksList[bookId];
        this.booksList[bookId] = {
            ...prevData,
            ...newData,
        };
        return this.booksList[bookId];
    }
    // ---
    deleteRecord = (bookId) => {
        const { fileBook } = this.booksList[bookId];
        this.deleteRecordAttachment(fileBook);
        delete this.booksList[bookId];
        return SUCCESS_OPERATION;
    }
    deleteRecordAttachment = (fileBook) => {
        if (fileBook && fileBook.length !== 0) {
            deleteAttachment(fileBook);
        }
    }
    // ---
    saveNewBook = (bookData) => {
        const baseTemplate = this.createBookTemplate();
        const { id } = baseTemplate;
        const bookRecordData = {
            ...baseTemplate,
            ...bookData,
        };
        if (!this.dbHasTargetRecord()) {
            this.addNewRecord(id);
        }
        this.addDataToRecord(id, bookRecordData);
        return bookRecordData;
    }
    // ---
    updateBookRecordFileLink = (bookId, fileName) => {
        const fileLinkField = {
            fileBook: fileName,
        };
        return this.updateRecord(bookId, fileLinkField);
    }
}

const booksDB = new BooksDatabase();

module.exports = {
    booksDB,
};