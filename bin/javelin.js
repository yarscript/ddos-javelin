#! /usr/bin/env node
const process = require('process');
const shell = require("shelljs");

const arguments = {
    host    : process.argv[3] || 'http://localhost:3000',
    requests: process.argv[4] || 150,
    ms      : process.argv[5] || 500,
};

shell.exec(`npm run start hostname=${ arguments.host } requests=${ arguments.requests } ms=${ arguments.ms }`);
