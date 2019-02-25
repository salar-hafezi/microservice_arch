# microservice_arch
A demo repo to test against Microservice best practices in NodeJS
## try_01
A **Hello World** microservice without any DBs.
This project lays the groundwork for the other projects. Some of its important modules are:
+ **body-parser**: HTTP payload parser library
+ **config**: environment variable parser/loader
+ **cors**: enables CORS (Cross Origin Resource Sharing)
+ **debug**: tiny debugging utility
+ **express**: main HTTP server
+ **reflect-metadata**: Metadata Reflection API
+ **rimraf**: rm -rf for node
+ **routing-controllers**: MVC-like controllers for node
+ **winston**: logging medium
## try_02
A **Product Catalog** microservice using **MongoDB** as the primary data store.

[This project uses Mongoose](https://mongoosejs.com/ "Mongoose")
Other important modules:
+ **express-ping**: API endpoint health checker
+ **helmet**: security library with various HTTP headers.
+ **lodash**: JS utility
+ **typedi**: IoC container for Dependency Injection (DI)
## try_03
A **Product Catalog** microservice using **PostgreSQL** as the primary data store.

[This project uses TypeORM](https://typeorm.io/ "TypeORM")
