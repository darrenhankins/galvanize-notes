### PostgreSQL

- 15 yrs in development
- Fully ACID compliant  (mongoDB is not)
- ANSI-SQL:2008
- PostgreSQL or Postgres

#### Fully ACID compliant

- Atomicity - post or doesn't
- Consistency - valid state
- Isolation - concurrent execution of transactions results in a system state
- Durability - transaction will exist once committed

# How to install Postgres

## Directions

Install Postgres:
```sh
$ brew install postgresql
```

Install [Homebrew Services](https://github.com/Homebrew/homebrew-services):
```sh
$ brew tap homebrew/services
```

Start Postgres as a service:
```sh
$ brew services start postgres
```

Bootstrap a database:
```sh
$ createdb
```

Verify that Postgres is running:
```sh
$ psql
```

If it worked, you'll see something like this:
```sh
psql (9.5.3)
Type "help" for help.

dannyfritz=#
```

Quit out of `psql` with `\q`:

```sh
psql (9.5.3)
Type "help" for help.

dannyfritz=# \q
$
```


## Finished! :tada:

Congratulations! Now Postgres will automatically start automatically on login!

## Bonus

See a list of all services running with:
```sh
$ brew services list
```

Start Postgres Services:
```sh
$ brew services start postgres
```

Stop Postgres from running with:
```sh
$ brew services stop postgres
```
