import * as winston from 'winston';

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ]
});

const env = 'dev';

if (env === 'dev') {
    // do something
}

process.on('unhandledRejection', (reason, p) => {
    logger.warn('system level exceptions at, Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});