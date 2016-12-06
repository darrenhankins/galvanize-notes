### SQL DML

Data Manipulation Language

Standard Query Language
- SQL is a standard language for retrieval, storing and updating a database

```
SELECT * FROM dbtable;

SELECT * FROM dbtable WHERE title_id = 1;

SELECT * FROM dbtable WHERE title_id IS NULL;

SELECT * FROM dbtable WHERE first_name IN ('dog','cat','fish');

SELECT * FROM dbtable WHERE first_name LIKE '%a%';

SELECT * FROM dbtable LIMIT 10;

SELECT * FROM dbtable ORDER BY first_name;

UPDATE dbtable SET title_id = 1 WHERE last_name = 'Fritz';

DELETE FROM dbtable WHERE first_name = 'Fritz';


```
