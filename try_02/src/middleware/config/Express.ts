import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { useExpressServer, useContainer } from 'routing-controllers';
import * as path from 'path';
import * as health from 'express-ping';
import * as helmet from 'helmet';
import { Request, Response } from 'express';
import { Container } from 'typedi';

export class ExpressConfig {
    app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(health.ping('/ping'));
        this.app.use(helmet());
        this.app.use(this.clientErrorHandler);
        this.setUpControllers();
    }

    setUpControllers() {
        const controllersDirectory = path.resolve('dist', 'service-layer/controllers');
        useContainer(Container);
        useExpressServer(this.app, {
            controllers: [controllersDirectory + '/*.js'],
            cors: true
        });
    }

    clientErrorHandler(err: any, req: Request, res: Response, next: Function): void {
        if (err.hasOwnProperty('thrown'))
            res.status(err['status']).send({
                error: err.message
            });
    }
}