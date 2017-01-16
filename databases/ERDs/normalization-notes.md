### Normalization

Has to relate to the table. Placing like data into the right table to organize and ease the way of accessing data.

- FirstNF all records should have the same fields
- 2NF any no key field is related to the table
- 3NF one depends on the other (no Transitive data)

##### Not Normalized Data
- Owner (table)
  - name
  - address
  - pet_name
  - pet_type

##### Normalized Data
- Owner (table)
  - name
  - address


- Pet (table)
  - id
  - owner_id
  - pet_name
  - pet_type

#### Transitive Data
- owner (table)
  - id (pk)
  - name
  - address


- pet (table) (pet >- owner, many-to-one)
  - id (pk)
  - owner_id (fk)
  - pet_name
  - pet_type
  - age_group_id (fk)


###### Transitive data in age_group
- age_group (table) (pet >- age_group, many-to-one)
  - id (pk)
  - age_range
  - status
