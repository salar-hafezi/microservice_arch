import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import * as path from 'path';

export class ExpressConfig {
    app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
        this.setUpControllers();
    }
    
    setUpControllers() {
        const controllersDirectory = path.resolve('dist', 'controllers');
        useExpressServer(this.app, {
            controllers: [controllersDirectory + '/*.js']
        });
    }
}