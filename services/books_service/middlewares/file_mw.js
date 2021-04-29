const multer = require('multer');

const {
    PATH_TO_BOOKS_STATIC,
} = require('./constants');
const {
    addTimeMarker,
    isMIMETypeAllowed,
} = require('./utils');


const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, PATH_TO_BOOKS_STATIC); },
    filename: (req, file, cb) => { cb(null, `${addTimeMarker()}-${file.originalname}`); }
});

const fileFilter = (req, file, cb) => cb(null, isMIMETypeAllowed(file.mimetype));

module.exports = {
    handleFile: multer({ storage, fileFilter }),
};