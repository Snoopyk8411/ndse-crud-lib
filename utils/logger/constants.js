const { FILE_ENCODE } = require('../../constants');
const LOG_PATH_FLAG = 'logPath';
const LOG_FILE_EXT = '.txt';
const LOG_FILE_ADDON = '__log';
const LOG_DIR_NAME = 'logs';
const LOG_DIR_EXISTS = 'Logs directory founded -';
const GIT_IGNORE = '.gitignore';
const IGNORE_LOG_DIR = `\n# Logs
logs\n`;
const LOG_PROGRAM_END = '-----';
const MOVE_TO_ROOT_PATH = ['..', '..'];
// modes
const SILENT = 'silent';
const LOG_MODES = [SILENT];
// exceptions

module.exports = {
    LOG_PATH_FLAG,
    LOG_FILE_EXT,
    LOG_FILE_ADDON,
    LOG_DIR_NAME,
    LOG_DIR_EXISTS,
    GIT_IGNORE,
    FILE_ENCODE,
    IGNORE_LOG_DIR,
    LOG_PROGRAM_END,
    MOVE_TO_ROOT_PATH,
    SILENT,
    LOG_MODES,
};