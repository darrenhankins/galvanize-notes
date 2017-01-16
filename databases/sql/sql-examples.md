

```sql

 '%boot%'

SELECT TOP 5 * FROM orders LIMIT 5

Select * FROM order ORDER BY id DESC LIMIT 5;

#10
SELECT ROUND(AVG(amount), 2) FROM orders;

SELECT name, SUM(amount) FROM customers JOIN orders ON customer.id = orders.customer_id GROUP BY name;

#29
SELECT DISTINCT name, items.name FROM customers JOIN orders ON customers.id = customer_id JOIN orderitems ON orders.id = orderitmes.order_id JOIN items ON items.id = orderitems.item_id WHERE items.name = 'bike03';


```
