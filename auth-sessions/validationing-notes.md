### Validations

```js
req.body
schema
```
```js
// get data into server
req.body
req.params
req.query

```

```js
function isValidId(id) {
  // is it a number
  // return typeof id == 'number';
  return !isNaN(id);
}

function validTodo(todo){
  return typeof todo.title == 'string' &&
  todo.title.trim() != '' &&
  !isNaN(todo.priority);
}

router.post('/', (req, res)=> {
  const id = req.params.id;
  console.log('id', id);
  console.log();
  if (isValidId(id)){
    knex('todo')
      .insert(req.body, 'id')
      .then((id)=> {
        res.json(id);
      });
  } else {
    res.status(404);
    res.render('error', {message: 'invalid ID'});
  }
})
```
