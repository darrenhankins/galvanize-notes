### CRUD App using KNEX

Console Commands
```
// Installing and setting up knex

$ npm init -y                   #creates a package.json file in the project folder
$ npm install knex -g           #install knex cli globally
$ npm install --save pg knex    #install knex locally
$ knex init                     #create knexfile.js
$ createdb db_name              #creates database

$ npm install -S dotenv
$ npm install -S express
$ npm install -S body-parser
$ npm install -g gitignore


$ touch .env
$ echo .env >> .gitignore     # adds to gitignore


$ knex migrate:make someName  #creates a migration file 1-name
$ knex migrate:latest         #runs the migration file

$ knex seed:make someName     #creates seed file, runs in order so name file 1-name
$ knex seed:run               #runs the new seed file that was created


psql
\l                      #list databases
\dt                     #list the tables
\d ballons              #describe ballons table
\c clown_inventory      #changes to db
SELECT * FROM ballons;  #show the ballons


touch index.js  #create express app
node index.js

nodemon index.js  #in first terminal window
http-server  #in second terminal window, within project directory



```
---
Express file: index.js
```js

const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

// get
app.get('/balloon', (req,res)=> {
  knex('balloon')
  .select()
  .then(balloons => {
    res.json(balloons);
  })
})

//
app.get('/balloon/:id', (req,res)=> {
  knex('ballon')
  .select()
  .where('id', req.params.id)
  .first() // removes the object and just returns the array
  .then(balloon => {
    res.json(balloon);
  })
})

```
---
in db folder just made, create new file knew.js
```js
const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('...knexfile');
const config = knexConfig[environment];
const knex = require('knex');
const knexConnection = knex(config);

module.exports = knexConnection;


```
---
migration file in migrations folder
```js
exports.up = function(knex, Promise){
  return knex.schema.createTable('ballon', table => {
    table.increments();
    table.text('shape');
    table.float('volume');
    table.text('color');
    table.text('size');
  });
};

exports.down = function(knex, Promise){
  return knex.schema.dropTable('ballon');
};

```
---
insert into seed file
```js

exports.seed = fucntion (knex, Promise){
  return knex('ballon').del()
  .then (function(){
    // entered seed data
    const ballons = [{
      shape: 'circle',
      color: 'yellow'
      size: 'S'
    },{
      shape: 'heart',
      color: 'red'
      size: 'L'
    },{
      shape: 'triangle',
      color: 'blue'
      size: 'M'
    }];

    return knex('ballon').insert(ballons); // returns after insertion is done
  });
}


```
---
.env file
```

DATABSE_URL=postgres://localhost/clown_inventory
```
---

require('dotenv').config();

development
client: 'pg'
connection: 'process.env.DATABSE_URL'
<!-- connection: 'postgres://localhost/clown_inventory' -->

production
client: 'pg'
connection: 'process.env.DATABSE_URL'
