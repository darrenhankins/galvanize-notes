### Express Concepts

- [Middleware](#Middleware function)
 - Middleware Theory
 - Before routes
 - 404 after routes
 - Error handler
- Templating
  - When using...
    - to create `npm install -g express-genterator`
    - to run `$ node bin/www` or `$nodemon bin/www`
  - Engines
  - Partials / Layouts




















 ##### Middleware function
  - `app.use()` is middleware
  - Ex. `app.use(function(req, res, next){})`
    - ex. bodyParser
  - Ex. `app.use(function(req,res,next, error){})`
