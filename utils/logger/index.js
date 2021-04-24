const fs = require('fs');
const path = require('path');

const {
    LOG_FILE_EXT,
    LOG_FILE_ADDON,
    LOG_DIR_NAME,
    LOG_PROGRAM_END,
    MOVE_TO_ROOT_PATH,
    SILENT,
} = require('./constants');
const {
    parseFlagsToLogString,
    addTimeStamp,
    callbackWithErrHandle,
    logDirChecker,
    parseLoggingContent,
    parseFlagsForFileName,
} = require('./utils');

class Logger {
    constructor() {
        this.filePath = '';
        this.fileName = '';
        this.logsDirName = '';
    }
    // main method
    initLogging = (command, flags) => {
        const {
            hasLogFilePath,
            parsedFileName,
            parsedDirName,
        } = parseFlagsForFileName(flags);
        if (hasLogFilePath) {
            this.fileName = parsedFileName;
            this.logsDirName = parsedDirName;
        } else {
            this.generateLogFileName(command);
            this.generateLogsDirName(flags);
            logDirChecker(this.logsDirName).check();
        }
        this.initLogFile(command, flags);
    }
    // ---
    generateLogFileName = (base) => {
        this.fileName = `${base}${LOG_FILE_ADDON}${LOG_FILE_EXT}`;
    }
    generateLogsDirName = () => {
        this.logsDirName = path.join(__dirname, ...MOVE_TO_ROOT_PATH, LOG_DIR_NAME);
    }
    // ---
    initLogFile = (command, flags) => {
        this.filePath = path.join(this.logsDirName, this.fileName);
        // ---
        const logFlagsString = parseFlagsToLogString(flags);
        const initTemplate = addTimeStamp(`User command = ${command}, User flags = ${logFlagsString}\n`);
        // ---
        this.addToFile(initTemplate);
    }
    // ---
    log = (...rawContent) => {
        const { content, mode } = parseLoggingContent(rawContent);
        if (content === LOG_PROGRAM_END) {
            this.logProgramEnd();
            return;
        }

        if (mode !== SILENT) {
            console.log(content);
        }
        const contentTemplate = addTimeStamp(`${content}\n`);
        this.addToFile(contentTemplate);
    }
    logProgramEnd = () => {
        this.addToFile(`${LOG_PROGRAM_END}\n`, true);
    }
    addToFile = (content, isSync) => {
        const correctOperation = !fs.existsSync(this.filePath) ? 'write' : 'append';
        fs[`${correctOperation}File${isSync ? 'Sync':''}`](this.filePath, content, callbackWithErrHandle());
    }
}

const logger = new Logger();
module.exports = {
    logger,
    LOG_PROGRAM_END,
    SILENT,
};