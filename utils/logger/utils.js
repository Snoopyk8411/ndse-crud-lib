const fs = require('fs');
const path = require('path');

const {
    LOG_DIR_NAME,
    GIT_IGNORE,
    FILE_ENCODE,
    IGNORE_LOG_DIR,
    MOVE_TO_ROOT_PATH,
    LOG_MODES,
    LOG_PATH_FLAG,
} = require('./constants');

const logDirChecker = (dirName) => {
    let logsDirName = dirName;
    let logDirIsIgnored = false;

    const addLogDirToIgnore = (ignoreFile) => {
        if (!logDirIsIgnored) {
            fs.appendFile(ignoreFile, IGNORE_LOG_DIR, callbackWithErrHandle('ok'));
        }
    };
    const parseIgnoreFile = (path, target) => {
        const readerStream = fs.createReadStream(path);
        readerStream.setEncoding(FILE_ENCODE);
        readerStream.on('data', (chunk) => {
            logDirIsIgnored = chunk.includes(target);
        });
        readerStream.on('end', () => {
            addLogDirToIgnore(path);
        });
    };
    // ---
    const checkLogDirIsIgnored = () => {
        const gitIgnorePath = path.join(__dirname, ...MOVE_TO_ROOT_PATH, GIT_IGNORE);
        const ignoreFileExists = fs.existsSync(gitIgnorePath);
        if (ignoreFileExists) {
            parseIgnoreFile(gitIgnorePath, `${LOG_DIR_NAME}`);
        }
    };
    const check = () => {
        if (!fs.existsSync(logsDirName)) {
            fs.mkdir(logsDirName, callbackWithErrHandle());
        }
        checkLogDirIsIgnored();
    };
    // ---
    return {
        check,
    };
};

const parseFlagsToLogString = (flagsObj = {}) => {
    let flagsLogString = [];
    Object.keys(flagsObj).forEach((key) => {
        flagsLogString.push(`${key}: ${flagsObj[key]}`);
    });
    return flagsLogString.length !== 0 ? flagsLogString.join(', ') : '';
};

const addTimeStamp = (content) => {
    const timestamp = (new Date).toISOString();
    return `[${timestamp}] ${content}`;
};

const parseLoggingContent = (contentParts) => {
    let content = contentParts[0] || '';
    let mode = '';

    if (contentParts.length <= 1) {
        return {
            content,
            mode,
        }
    }

    content = contentParts.reduce((prevContent, currentPart) => {
        if (LOG_MODES.includes(currentPart)) {
            mode = currentPart;
            return prevContent;
        }
        return prevContent + `${currentPart}`;
    });
    return {
        content,
        mode,
    }
};

const callbackWithErrHandle = (content) => (err) => {
    if (err) throw new Error(err);
    if (content) console.log(content);
};

const parseFlagsForFileName = (flags) => {
    let hasLogFilePath = !!flags[LOG_PATH_FLAG];
    let flagFilePath = '';
    let parsedFileName = '';
    let parsedDirName = '';
    if (hasLogFilePath) {
        flagFilePath = flags[LOG_PATH_FLAG];
        parsedFileName = path.basename(flagFilePath);
        parsedDirName = path.dirname(flagFilePath);
    }
    return {
        hasLogFilePath,
        parsedFileName,
        parsedDirName,
    };
};

module.exports = {
    parseFlagsToLogString,
    addTimeStamp,
    callbackWithErrHandle,
    logDirChecker,
    parseLoggingContent,
    parseFlagsForFileName,
};