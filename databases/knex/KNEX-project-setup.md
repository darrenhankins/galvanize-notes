### KNEX Project Setup

```
$ npm install knex -g           #install knex cli globally
$ npm install pg knex --save     #install knex locally
$ knex init                     #create knexfile.js
$ createdb db_name              #creates database

```


```
$ npm install -S dotenv
$ npm install -S express
$ npm install -S body-parser
$ npm install -g gitignore


$ touch .env
$ echo .env >> .gitignore       # adds to gitignore

// add database url to .env file
DATABASE_URL=heroku.database.url

```

```js
// Update the 'knexfile.js' with your config settings

require("dotenv").load();

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

```
$ knex migrate:make 1-someName    #creates a migration file
$ knex migrate:latest             #runs the migration file

$ knex seed:make 1-someName       #creates seed file, runs in order (ie brewery, then beers since it requires brewery as a foreign key)
$ knex seed:run                   #runs the new seed file that was created

```
