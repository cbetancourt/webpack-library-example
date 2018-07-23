const webpackNumbers = require('./webpack-numbers.js');

const debug = require('debug')('example');
const chalk = require('chalk');

const out = () => {
    const res = webpackNumbers.numtoword(1);
    debug(`This is the result for numtoword(1): ${chalk.green(res)}`);
};
out();