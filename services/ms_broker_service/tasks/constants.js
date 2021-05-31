const { EOL } = require('os');
const { BROKER_PATTERN } = require('../constants');
const NPM_SHELL = 'npm';
const NPM_RUN_COMMAND = 'run';
// services
const DATA_EVENT = 'data';
const CLOSE_EVENT = 'close';
const SERVICE_OUTPUT = '[stdout]: ';
const SERVICE_ERROR = '[stderr]: ';
const SERVICE_CLOSE = '[close]: child process exited with code - ';

module.exports = {
    NPM_SHELL,
    NPM_RUN_COMMAND,
    DATA_EVENT,
    CLOSE_EVENT,
    SERVICE_OUTPUT,
    SERVICE_ERROR,
    SERVICE_CLOSE,
    BROKER_PATTERN,
    EOL,
};