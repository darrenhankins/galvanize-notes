### CRUD: Deploy Using Express
---

- ##### Create GitHub project
  - `$ echo "## brew-tasting-tracker" >> README.md` Creates a README.md file
  - `$ git init` Creates a empty .gitignore file
  - `$ touch .gitignore`
  - Add to .gitignore (google drive thing)
      - `*/Icon?` `*/Icon` `Icon?`
`Icon`
  - create github repository
  - `$ git remote add origin git@github.com:darrenhankins/github-repository.git`
  - `$ git remote -v` shows all remotes
  - `$ git add -A` Add all files
  - `$ git commit -m "first commit"` First commit
  - `$ git push -u origin master`

---

- ##### Install Globals
  - `$ npm install express-generator -g` Express-Generator
  - `$ npm install knex -g` Knex

---

- ##### Express Generator Templating
  - `$ express --view=hbs --git` installs handlebars

  - Express overrides the .gitignore, so add these line again
  ```
  # Google Drive creates these
*/Icon?
/Icon?
*/Icon
Icon
  ```

- `$ cd .` CD into folder
- ##### Install Package Dependancies
  - `$ npm install`
  -  `$ DEBUG=galvanize-reads-crud:* npm start` Run the new app

- ##### Install Knex locally
  - `$ npm install --save pg knex` or `$ npm i -S pg knex`

- ##### Install Addition Packages
  - `$ npm install -S dotenv`

- ##### Create knexfile.js
    - `$ knex init`
    - knexfile.js setup

    ```js
    // Update with your config settings.
    require("dotenv").config();

    module.exports = {

      development: {
        client: 'postgresql',
        connection: 'postgres://localhost/db-name'
      },

      production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
      }

    };

    ```


- ##### Create an `.env` file
  - `$ touch .env`
  - `$ touch .env.sample` example file
  - `$ echo .env >> .gitignore` Adds to .gitignore

---

- ##### Create a database, Postgres DB Commands
  - `$ createdb db_name`
  - `$ psql` terminal for Postgres
  - `$ psql db-name` open Postgres database
  - `# \l` list databases
  - `# \dt` list the tables
  - `# \d table-name` show table schema
  - `# \c db-name` change db
  - `# SELECT * FROM table-name;` show all
  - `# TABLE table-name;` short hand for SELECT
  - `# \q` Quit out of Postgres Terminal

---

- ##### Make DB Migration files

  - `$ knex migrate:make 01-table-name` creates migration, runs in order
  - `$ knex migrate:latest` runs the migration file

- ##### Make seed files

  - `$ knex seed:make 01-table-name` creates seed file, runs in order
  - `$ knex seed:run` seeds the db
  - `$ knex seed:run --debug` or in the knex string

  ```js
  knex('').debug(true)

  ```

---

- ##### Run local

  - `$ nodemon bin/www` first terminal window (if package.json start is steup correclty) or `$ nodemon index.js`

  - `$ http-server` second terminal window, within project directory

---

### All Ready to go!
