###  Heroku Commands

```
heroku login

heroku create [name] // Initializes heroku app and adds remote
https://crud-knex.herokuapp.com/ | https://git.heroku.com/crud-knex.git

git add -A
git commit -m "database url add"
git push heroku master // push github repo master to heroku

heroku addons:create heroku-postgresql // connect to a database

heroku config // should show the database
DATABASE_URL: postgres://oofgdgfafantdp:s6K5huZUac5WtFuoFGs0LSi_SQ@ec2-50-17-236-15.compute-1.amazonaws.com:5432/dejo4r8s3a0u14
// put in .env file

git add -A
git commit -m "database url add"
git push heroku master

knex migrate:latest --env production
knex seed:run --env production


heroku pg:psql // Connect to heroku addon database server
\d
\d beers


heroku logs [--tail] // Shows heroku server terminal
heroku config // shows heroku environment variables
herokku config:set clown=fiesta
heroku open

```
