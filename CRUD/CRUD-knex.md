### CRUD: Knex
---
### DELETE THESE are in CRUD-Deploying
$ npm init -y                   #creates a package.json file in the project folder
$ npm install knex -g           #install knex cli globally
$ npm install --save pg knex    #install knex locally
$ knex init                     #create knexfile.js
$ createdb db_name              #creates database

$ npm install -S dotenv
$ npm install -S express
$ npm install -S body-parser
$ npm install -g gitignore
$ npm i -S cors  // app.use(cors()); in app.js

$ npm install // installs dependencies based on json.package file
$ npm update // only install things in json.package that have not been install


$ touch .env
$ echo .env >> .gitignore     # adds to gitignore
### DELETE THESE are in CRUD-Deploying
---

### Knexfile.js Setup

```js
// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/galvanize_brews'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};

```

### Add to .env
`DATABASE_URL=heroku.database.url.will.go.here`

---

### Make a DB Migration file

```
$ knex migrate:make 1-someName  #creates a migration file 1-name
$ knex migrate:latest         #runs the migration file
$ knex migrate:rollback   #rollback to previous migration

$ knex seed:make 1-someName     #creates seed file, runs in order so name file 1-name
$ knex seed:run               #runs the new seed file that was created
$ knex seed:run --debug       #or in the knex string, knex('').debug(true)



psql
\l                      #list databases
\dt                     #list the tables
\d ballons              #describe ballons table
\c clown_inventory      #changes to db
SELECT * FROM ballons;  #show the ballons
TABLE ballons;          #show the ballons


--- //don't need// touch index.js  #create express app
--- //don't need// node index.js

$ nodemon bin/www  #in first terminal window (if package.json start is steup correclty) or $ nodemon index.js

$ http-server  #in second terminal window, within project directory



```
---
Create a new migration file

`$ knex migrate:make sticker`
```js
return knex.schema.createTable('sticker', table => {
  table.increments();
  table.text('description').notNullable();
  table.text('image_url').notNullable();
  table.integer('quantity').notNullable().defaultTo(0);
  table.text('size');
  table.integer('user_id').references('user.id').unsigned().onDelete('cascade');

});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('sticker');
};

```
---
#### Create new migration table to change column name
```js


exports.up = function(knex, Promise) {
  return knex.schema.table('sticker', table =>{
    // to change column names
    table.dropColumn('date');
    table.datetime('created_at');
  });
};

exports.down = function(knex, Promise) {
  // to revert to original columns
  table.dropColumn('created_at');
  table.datetime('date');
};

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
in db folder just made, create new file knex.js
```js
const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile');
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
