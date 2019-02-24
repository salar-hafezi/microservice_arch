import * as Mongoose from 'mongoose';
import * as config from 'config';
import { logger } from '../../middleware/common/Logging';

class Mongo {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        Mongo.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }

        const conString = (config.get('mongo.urlClient') as string).toString();
        this.mongooseConnection = Mongoose.connection;

        this.mongooseConnection.once('open', () => {
            logger.info('Connection to mongodb is opened.');
        });

        this.mongooseInstance = Mongoose.connect(conString, { useNewUrlParser: true });

        this.mongooseConnection.on('connected', () => {
            logger.info('Mongoose default connection open to ' + conString);
        });

        this.mongooseConnection.on('error', (msg) => {
            logger.info('Mongoose default connection message:', msg);
        });

        this.mongooseConnection.on('disconnected', () => {
            setTimeout(function () {
                this.mongooseInstance = Mongoose.connect(conString);
            }, 10000);
            logger.info('Mongoose default connection disconnected.');
        });

        this.mongooseConnection.on('reconnected', () => {
            logger.info('Mongoose default connection is reconnected.');
        });

        process.on('SIGINT', () => {
            this.mongooseConnection.close(() => {
                logger.info('Mongoose default connection disconnected through app termination.');
                process.exit(0);
            });
        });

        return this.mongooseInstance;
    }
}

Mongo.connect();
export { Mongo }