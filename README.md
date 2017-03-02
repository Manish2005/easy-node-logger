# node-logger
Logger for Node JS

##Installation
`npm install easy-node-logger`

##How to Use
- Include the package
```
var logger = require('easy-node-logger');
```

- Initialize the logger with your logs directory
```
logger.init({path: './logs'}); //Please make sure this directory exists
```

- Start Logging
```
//Info Log
logger.log('This is a Info log');

//or
logger.info('This is an Info log');
 
//Error Log
logger.error('This is an Error log');
```

##More Configs
You can mention these configs while initalizing the logger to override
```
logger.init({
    path: './logs', 
    appendDateTime: true, 
    format: 'json'
});
```
path: (String) Path if the directory where you want to store your logs

appendDateTime: (Boolean) If set true, appends timestamp to each log records

format: (String) Supported formats include 'json' and 'text'