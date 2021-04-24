const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { EMPTY, SELF_ARG, COMMANDS_ARG } = require('../constants');

const getArgs = (rawArgs) => yargs(hideBin(rawArgs)).argv;
const getCommandFromArgs = (arguments) => {
    const { _: [command = EMPTY] = [] } = arguments;
    return command;
};
const getFlagsFromArgs = (arguments) => {
    const outputArguments = { ...arguments };
    delete outputArguments[SELF_ARG];
    delete outputArguments[COMMANDS_ARG];
    return outputArguments;
};

module.exports = {
    getArgs,
    getCommandFromArgs,
    getFlagsFromArgs
};