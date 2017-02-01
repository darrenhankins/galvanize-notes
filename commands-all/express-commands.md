### Express

`Galvanize/Exercises/warmup-exercise-2`

#### Create just an express app
```terminal
$ npm init -y  // creates just a package.json file

```

#### Express/Knex Setup
```terminal
$ express --git --hbs
$ yarn add knex pg
$ knex init
$ yarn add dotenv
$ touch .env
$ touch .env.sample
$ echo .env >> .gitignore

$ yarn add global nodemon
$ yarn add bcrypt


```
knexfile.js

```js
require("dotenv").load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postres://localhost/database-name'
  }
  // },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL + '?ssl=true'
  // }
};
```

---

#### Database Connection
db/knex.js
```js
var config = require("./knexfile")[process.env.NODE_ENV || "development"];
module.exports = require("knex")(config);

```
