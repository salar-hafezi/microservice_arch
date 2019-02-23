import { JsonController, Get } from "routing-controllers";

@JsonController('/hello-world')
export class HelloWorld {
    constructor() {}

    @Get('/')
    async get(): Promise<any> {
        return {
            "content": "This is my first microservice :)"
        };
    }
}