var logger = require('./app');

logger.init({path: './logs/logs/logs2', appendDateTime: true, format: 'json'});

logger.log("Test Log");
logger.info("Test info Log");
logger.error("Test error Log");