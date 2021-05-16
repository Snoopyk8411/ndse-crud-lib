const {
    NOT_FOUND_CODE,
    NOT_FOUND_URL,
} = require('../constants');

const handleNotFoundRedirect = (response) => response.status(NOT_FOUND_CODE).redirect(NOT_FOUND_URL);

module.exports = {
    handleNotFoundRedirect,
};