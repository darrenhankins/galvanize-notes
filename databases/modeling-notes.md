### Modeling

Entity Relationship Diagram

 #### customer

| Primary-Key | Id | Type |
| - | - | - |
| 1 | Darren | text

#### order

| Id (pk) | customer-id (fk) | Type|
| - | - | - |
| 3 | 1 | int |

#### order_product

| Id (pk) | order-id (fk) | Type |
| - | - | - |
| - | - | - |


#### product

| Id (pk) | name | - |
| - | - | - |
| - | - | - |
