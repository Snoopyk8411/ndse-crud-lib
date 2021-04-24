#!/usr/bin/env node -r dotenv/config

const { getArgs } = require('./utils/args');
const { runApp } = require('./app');

const userArguments = getArgs(process.argv);
runApp(userArguments);