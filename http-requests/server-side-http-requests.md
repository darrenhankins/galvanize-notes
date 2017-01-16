### Server Side HTTP Requests

https://gist.github.com/w3cj/5c84453c32370f5434607bd6cdd1384d

https://www.npmjs.com/package/express-zero-config

<img src="./images/client-express.png" width="500">

```js
require ezc = require('express-zero-config')
require fetch
const GOGGLE_API_URL = 'someApiUrl';
// const url = `&{GOGGLE_API_URL}process.env.GOGGLE_API_KEY`;

router.get('/places', (req, res) => {
fetch(`&{GOGGLE_API_URL}&{process.env.GOGGLE_API_KEY}`)
  .then(function(res) {
    // res is just a string
    // fetch's built in method called json()
    // "jsonifies" it (makes it a json)
    return res.json();
  }).then(function(json){
    // show json
    res.json(json.results[1]);
  });
});


```

```js
// when an error is thrown
// 'next' sends user error warning
next(new Error('Invalid user information'));

```
