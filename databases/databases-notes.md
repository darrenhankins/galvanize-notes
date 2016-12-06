### Databases

- Data v info
- Entity?
- why use DBMS (describe/define)
- how is data stored (table, field, record)
- primary and foreign key (describe/define)

#### Data
  - anything with values
  - list of integers

Difference between data and information is `context`

```
1,23,45 (data)
jerseysNumbers = 1,23,45 (information)
```

##### Entity - smaller unit of data
  - object that represents something (person, place, thing)
  - individual data joined together
  - an entity has a handful of attributes
  - record - single entry of an entity (song of an array song)

#### DBMS (database management systems)

DBMS is the whole Program
  - account access
  - persistent
  - remotely access the DB
  - efficient, reliable, convenient and safe multi-user storage

Programs that store data in a `structured` way so that it can be easily searched and accessed in the future

#### Database server
 - Server that exposes a Database physical or virtual servers that contains the DBMS used to manage the data and administer the server
 - Separation of concerns

#### Relational Databases
  - table, field, record
  - data stored in a `tables`
    - table is `rows` and `columns`
  - `Record` is a single entity
  - Each column is a `field`
  - Columns have a specific datatype know as `schema`
  - Some datatypes
    - character (name)
    - numeric
    - time-date
    - binary

what is a Relational database?
  - more than one table, each of which contains records

What is a `primary` key?
  - unique value for each record
  - must not repeat

What is a `foreign` key?
  - column in a relationship table that matches the primary key column of another table
