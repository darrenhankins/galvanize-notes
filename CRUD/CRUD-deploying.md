### CRUD: Deploying Using Express
---

- Install Globals Initially Global
  - `$ npm install express-generator -g` Express-Generator
  - `$ npm install knex -g` Knex

---

- Express Generator Templating
  - `$ express --view=hbs --git`
  // --git puts the node_modules in the .gitignore file


- DON'T NEED THIS-----Creates a package.json file in the project folder
  - -----`$ npm init -y`


- Install Package Dependancies (already in the package.json but not installed)
  - `$ npm install`

- Install Knex Package locally
  - `$ npm install --save pg knex` or `$ npm i -S pg knex`

- Install Addition Packages
  - `$ npm install -S dotenv`

  - DON'T NEED THIS-----`$ npm install -S express`
  - DON'T NEED THIS-----`$ npm install -g gitignore`

  - Create knexfile.js
    - `$ knex init`
    - SEE CRUD-knex.md file

---

- Create a .env file
  - `$ touch .env`
  - `$ echo .env >> .gitignore` Adds to .gitignore

---

- Create a database
  - `$ createdb db_name`
  - `$ psql` or  Terminal for Postgres
  - `$ psql databaseName` open Postgres database
  - `\l` List databases
  - `\c someDB` Change to some Database
  - `\q` Quit out of Postgres Terminal

---

- Create GitHub project
  - `$ echo "# brew-tasting-tracker" >> README.md` Creates a README.md file
  - `$ git init` Creates a empty .gitignore file
  - `$ git add -A` Add all files
  - `$ git commit -m "first commit"` First commit
  - `$ git remote add origin git@github.com:darrenhankins/brew-tasting-tracker.git`
  - `$ git push -u origin master`

### All Ready to go!
