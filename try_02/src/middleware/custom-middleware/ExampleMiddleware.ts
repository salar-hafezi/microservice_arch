import { ExpressMiddlewareInterface } from 'routing-controllers';

export class ExampleMiddleware implements ExpressMiddlewareInterface {
    constructor() {}

    use(req: any, res: any, next?: (err? : any) => any): any {
        console.log('ExampleMiddleware just called...');
        next();
    }
}