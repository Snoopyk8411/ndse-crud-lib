
const { getCommandFromArgs, getFlagsFromArgs } = require('./utils/args');
const { logger, LOG_PROGRAM_END } = require('./utils/logger');

const { NO_COMMAND_FOUND } = require('./constants');

const { serverCommands, runServerCommand } = require('./commands/server');

const runApp = (userArguments) => {
    const currentCommand = getCommandFromArgs(userArguments);
    const currentFlags = getFlagsFromArgs(userArguments);
    // ---
    logger.initLogging(currentCommand, currentFlags);
    // ---
    const toCommandRunner = true;

    switch (toCommandRunner) {
        case serverCommands.includes(currentCommand):
            runServerCommand(currentCommand, currentFlags);
            break;
        default:
            logger.log(NO_COMMAND_FOUND);
    }
    logger.log(LOG_PROGRAM_END);
};

module.exports = {
    runApp,
};