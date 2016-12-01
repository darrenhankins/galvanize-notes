#### Express
  - Fast, unopinionated, minimalist web framework for Node.js

  #### What is Express?
    - http-server
    - routing libraries
    - api framework
    - built on node.js


  #### Create a Express Project

  ```
  $ mkdir myApp
  $ cd myApp
  $ touch app.js
  $ npm init -y
  $ npm i express -S

  // i is install
  $ git init
  $ echo node_modules > .gitignore
  // '>>' appends the .gitignore file
  s
  $ git add .
  $ git commit -m 'initial commit'

  ```

  ```js
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser')
  app.use(bodyParser.json());

  app.listen(3000, function(){
    console.log('Listening on for 3000');
  })

  // create a database
  var puppies = [];

  // read all resources
  app.get('/puppies', function(req, res, next){
    res.json(puppies);
  })

  // read one resource
  app.get('/puppies/:id', function(req, res, next){
    if (puppies[req.params.id]) {
      res.json(puppies[req.params.id]);
    } else {
      res.status(404);
      res.send("not found");
    }
  })

  app.post('/puppies', function(req, res, next) {
    var puppy = {
      id: puppies.length,
      name: req.body.name,
      phrase: req.body.phrase
    }
    puppies.push(puppy);
    // return puppy json
    res.json(puppy);
  })

  ```

```js
// when a user makes a get request to the '/' url
app.get('/', function(req, res, next){
  res.send('hello world');
})

res.json(); // Send a JSON response
res.redirect(); // Redirect a request
res.render(); // Render a view template
res.send(); // Send text
res.sendFile(); // Send a file

// you must respond with a next() method the server will hang

```  

  `app.get(routeHere, callbackHere)`

  - What is a route? End point
  - What is a handler? Callback function (request, response, next)

  ```
  $ npm install nodemon
  $ nodemon // is like http-server command but for node, restarts server when changes are made to any files

  ```

  Designing a CRUD API that adheres to RESTful practices
    - create, read, update, delete (CRUD)

    - get, post, update, delete

#### Posts
  `$ npm install body-parser`
