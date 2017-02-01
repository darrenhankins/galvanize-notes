### KNEX
http://knexjs.org/

http://slides.com/lizh/intro_to_knex#/

Abstraction on top of SQL

#### Install
```
$ npm install knex -g // install global
$ express newApp && cd newApp
$ npm install
$ npm install --save pg knex // pg is the driver
$ knex init
```
#### Knex Setup
```js
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/pokemon',
    debug: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
```
#### Migrations (schema)
```
$ knex migrate:make add_sprites // make a migration file

```

```js

exports.up = function(knex, Promise) {
  return knex.schema.createTable('sprites', function(table){
    table.increments();
    table.string('url');
    table.integer('pokemon_id').references('pokemon.id').notNullable();
    table.text('type');
  });
};

exports.down = function(knex, Promise) {
  // return knex.schema.dropTable('sprites');
  return knex.schema.dropTableIfExists('sprites');

};

```

```
$ knex migrate:latest // run the migration

```
#### Migration (schema) - Updates

```
$ knex migrate:make add_base_experience_to_pokemon

```

```js
exports.up = function(knex, Promise) {
  return knex.schema.table('pokemon', function(table){
    table.string('base_experience');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('base_experience');
};

```

```
$ knex migrate:latest // Run the migration
```
#### Seeds (data)
```
$ knex seed:make 1-insert_sprites // create a seed file

```

```js
exports.seed = function(knex, Promise) {
  // return Promise.join(
    // Deletes ALL existing entries
    // knex('moves').del(),
    // return knex('moves'.del().then(function() {
    // return Promise.all([
    //   // Inserts seed entries
    //   knex('moves').insert({
    //     name: 'cut',
    //     type: "normal"
    //   }),
    //   knex('moves').insert({
    //     name: 'splash',
    //     type: "water"
    //   })
    // ])
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1')
      .then(function () {
      const users = [{
        id: 1,
        email: 'joe@crabshack.com',
        password: 'password01'
      },{
        id: 2,
        email: 'ralph@crabshack.com',
        password: 'password012345'
      }]
      return knex('user').insert('users');
    });
  );
};
```

```
$ knex seed:run // run the migration

```

#### CRUD with knex

```js
router.get("/pokemon", function(req,res){
    knex('pokemon')
    .select()
    .where('pokedex_number', '>', 100)
    .then(function(pokemon) {
      res.json(pokemon);
    });
});

router.get("/sprites", function(req, res) {
    knex('spirites')
    .select()
    .then(function(sprites){
       res.render('pokepictures', {sprites: sprites})
    });
});

router.post("/sprites", function(req,res) {
    knex("sprites")
    .insert({url: req.body.url, pokemon_id: req.body.pokemon.id, type: req.body.type})
    .then(function() {
        res.send("Success")
    })
    .catch(function(e) {
        res.json(e)
    });
});

```

```

createdb someknex // create DB
psql someknex

create role someknex with superuser login password 'someknew';

knex init // creates a knexfile.js

development and production module.exports

npm install -save dotenv // program to save file that won't get committed

touch .env
nano .env

DB_NAME=
DB_USER=
DB_PASS=

require("dotenv").load();

database: process.env.DB_NAME,

\dt // list tables
\dt dog // list dog table

...
...


```
