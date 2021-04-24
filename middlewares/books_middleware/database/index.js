const uidGenerator = require('node-unique-id-generator');
const {
    DEFAULT_RECORD_DATA,
    SUCCESS_OPERATION,
} = require('./constants');

class BooksDatabase {
    constructor() {
        this.booksList = {};
    }
    createBookTemplate = () => {
        return {
            id: uidGenerator.generateUniqueId(),
            ...DEFAULT_RECORD_DATA,
        };
    }

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
    deleteRecord = (bookId) => {
        delete this.booksList[bookId];
        return SUCCESS_OPERATION;
    }

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
}

const booksDB = new BooksDatabase();

module.exports = {
    booksDB,
};