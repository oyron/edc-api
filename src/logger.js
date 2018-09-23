const {format, createLogger, transports} = require('winston');
const dateformat = require('dateformat');
const path = require("path");
const logLevel = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'debug';

const levelToUppercaseFormat = format(info => {
    info.level = info.level.toUpperCase();
    return info;
});

const timestampFormat = format(info => {
    info.timestamp = dateformat(info.timestampt, "yyyy-mm-dd hh:MM:ss,l");
    return info;
});

const consoleFormat = format.combine(
    levelToUppercaseFormat(),
    format.colorize(),
    timestampFormat(),
    format.align(),
    format.printf(info => {
        return `${info.timestamp} ${info.level}: ${info.message}`
    })
);

const logFileFormat = format.combine(
    levelToUppercaseFormat(),
    timestampFormat(),
    format.align(),
    format.printf(info => {
        return `${info.timestamp} ${info.level}: ${info.message}`
    })
);

const logger = createLogger({
        level: logLevel,
        transports: [
            new transports.Console({format: consoleFormat}),
            new transports.File({
                    filename: path.join(__dirname, 'log', 'server.log'),
                    format: logFileFormat
                })
        ]
    })
;

module.exports = logger;
