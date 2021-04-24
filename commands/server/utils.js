const { logger, SILENT } = require('../../utils/logger');
const { initBooksServer } = require('../../middlewares/books_middleware');


module.exports = {
    logger,
    SILENT,
    initBooksServer,
};