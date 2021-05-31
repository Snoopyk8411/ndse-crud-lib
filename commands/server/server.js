const {
    SERVER_RUN,
    SERVER_RUN_STYLISH,
    STYLISH_GREETING,
} = require('./constants');
const {
    logger,
    getServiceName,
    initors,
} = require('./utils');

const initTargetService = (serviceName, isStylish, flags) =>
    initors[serviceName] && initors[serviceName]({ serviceName, isStylish, flags });

const startServer = (flags, isStylish) => {
    if (isStylish) logger.log(STYLISH_GREETING);
    const serviceName = getServiceName(flags);
    initTargetService(serviceName, isStylish, flags);
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