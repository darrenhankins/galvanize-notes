### Knex

`Galvanize/Exercises/warmup-exercise`

```terminal
$ createdb warmup-exercise  // $dropdb db-name
$ mkdir warmup-exercise
$ npm init -y  // make package.json

// add dependancies
$ yarn add knex pg
$ knex init

// if not found
$ yarn global add knex

$ knex migrate:make name
$ knex seed:make 01-name

$ knex migrate:rollback

```

knexfile.js

```js
require("dotenv").load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postres://localhost/database-name'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
```
  - .env file
  - .env.sample file

```

DATABASE_URL=heroku.url.here

```
