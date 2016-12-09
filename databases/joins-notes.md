### Database Joins

- students
  - id
  - height
  - name
  - age
  - cohort_id

- cohorts
  - id
  - name
  - grad_year
  - school_id

```sql

SELECT students.name, cohorts.name FROM students JOIN cohorts ON students.cohort_id = cohorts.id;

```
<img src="sql_joins.jpg" width="500">
