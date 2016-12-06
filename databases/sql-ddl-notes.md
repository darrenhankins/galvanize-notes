### SQL DDL

Data Definition Language

```
$ psql (opens a terminal prompt for postgres)
$ psql -l (lists all postgres databases)


# \l (lists all postgres databases)
# \c dbname (connect to db to use)
# \dt (shows the table)


# CREATE DATABASE dbname;

# CREATE TABLE owner (
    owner_id serial PRIMARY KEY,
    name text NOT NULL,
    age int NOT NULL);

# CREATE TABLE tablename (id serial, name text);


# DROP DATABASE dbname;

# DROP TABLE tablename;

# ALTER TABLE tablename ADD githubuser text;

# ALTER TABLE tablename DROP email;

# ALTER TABLE tablename ADD withdrawn boolean;

# TRUNCATE tablename; // removes all info from table but keeps the schema

```
