#### Test Driven development
###### Red-Green-Refactor (fail, pass, refactor)

```
$ mkdir test-demo
$ npm init -y // express install
$ yarn add --dev mocha chai
$ mkdir test
$ touch apple.js

```

[chia.js](http://chaijs.com/)

Test file apple_test.js in test folder
```js

const expect = require('chai').expect;
const apple = require('../apple');

describe('Apple', () => {
  it('should be an apple', () => {
    expect(apple()).to.equal('apple');
  })
})

```

package.json add to
```js

"scripts": {
  "test": "mocha"
}

```

apple.js file
```js

module.exports = function( {
  return 'apple';
})

```
