## Build a CRUD App w/ Single Resource
* Includes migrations
* Includes seeds
* Lists all records with GET /things
* Creates a record with POST /things
* Shows one record with GET /things/:id
* Updates a record with PUT /things/:id
* Deletes a record with DELETE /things/:id

## Heroku Deploy Commands

```sh
heroku login # login once
heroku create [name] # Initializes heroku app and adds remote.
heroku addons:create heroku-postgresql # add a postgres db addon to your heroku app
heroku logs [--tail] # Shows heroku server terminal
heroku pg:psql # connect to heroku addon database server
heroku config # shows heroku environment variables
  - heroku config:set clown=fiesta # set a config variable
git push heroku master # deploy latest code to heroku
heroku open # open heroku url in browser
```

*** remember to add start script inside package.json ***

## Run seeds/migrations on Heroku

```
knex migrate:latest --env production
knex seed:run --env production
```
