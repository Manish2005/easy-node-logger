'use strict';

const fs = require('fs');

//Default configs
let loggerConfig = {
    path: './logs',
    appendDateTime: false,
    format: 'text' //or json
};

/*
 * Initialize the logger
 */
function init(config) {
    for (let key in config) {
        loggerConfig[key] = config[key];
    }
}

/*
 * Info logs
 */
function info(msg) {
    writeToFile(msg, loggerConfig.path + '/info.log');
}

/*
 * Error Logs
 */
function error(msg) {
    writeToFile(msg, loggerConfig.path + '/error.log');
}

function writeToFile(message, filePath) {
    fs.appendFile(filePath, formatMessage(message), {}, function (sadas, adasda, xcvcxv, xvxcv) {
        debugger;
    });
}

/*
 * Format log message
 */
function formatMessage(message) {
    let output;
    switch (loggerConfig.format) {
        case 'json':
            let object = {msg: message};
            if (loggerConfig.appendDateTime) {
                object.time = Date();
            }
            output = JSON.stringify(object);
            break;
        default:
            if (loggerConfig.appendDateTime) {
                message = Date() + " " + message;
            }
            output = message;
            break;
    }
    return output + '\n';
}

module.exports = {
    log: info, // By default write to info logs
    info: info,
    error: error,
    init: init
};