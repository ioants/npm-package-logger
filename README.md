# npm-package-logger
The logger package is used for configuring the winston logging module.

## How to use

Load the module and set the logging configuration arguments.
```js
var Logger = require('ioant-logger');
// setup(path_to_log_folder, log_level_test, log_level_production, log_level_console)
Logger.setup('logs/', 'debug', 'debug', 'debug');
```
Available log levels are:
- error
- warn
- info
- verbose
- debug
- silly

Example of an application logging all logs of **warn** and above to file in production. When testing we wan't to store everything to file but only errors to console
```js
var Logger = require('ioant-logger');
// setup(path_to_log_folder, log_level_test, log_level_production, log_level_console)
Logger.setup('logs/', 'silly', 'warn', 'error');
```
