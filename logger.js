/**
 * @file logger.js
 * @author Adam Saxén
 *
 *  Module for logging 
 */

var winston = require('winston');
var path = require('path');

module.exports = winston;

module.exports.setup = function(log_path, log_level_test, log_level_production, log_level_console) {
    if (process.env.NODE_ENV !== 'test') {
        winston = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({ level: log_level_console }),
                new (winston.transports.File)({ filename: path.join(log_path_, 'output.log'), level: log_level_production })
            ]
        });
    } else {
        // while testing, log only to file, leaving stdout free for unit test status messages
        winston = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({ level: log_level_console}),
                new (winston.transports.File)({ filename:path.join(log_path_, 'output_tests.log') , level: log_level_test })
            ]
        });
    }
    module.exports = winston;
};
