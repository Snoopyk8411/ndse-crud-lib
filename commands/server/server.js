const {
    SERVER_RUN,
    SERVER_RUN_STYLISH,
    STYLISH_GREETING,
} = require('./constants');
const {
    logger,
    initBooksServer,
} = require('./utils');

const startServer = (flags, isStylish) => {
    if (isStylish) logger.log(STYLISH_GREETING);
    initBooksServer(flags, isStylish);
};

const runServerCommand = (command, flags) => {
    const isStylish = true;
    switch (command) {
        case SERVER_RUN:
            startServer(flags);
            break;
        case SERVER_RUN_STYLISH:
            startServer(flags, isStylish);
            break;
    }
};

// ---
const serverCommands = [SERVER_RUN, SERVER_RUN_STYLISH];
module.exports = {
    serverCommands,
    runServerCommand,
};