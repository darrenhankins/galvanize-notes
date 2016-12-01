### Node JS

- Non browser javaScript runtime
- Stand alone programs
- No DOM model or Browser Libraries
- No jQuery
- Use CommonJS Module System (use require to import a module)
- Evented I/O for V8 JavaScript (chrome browser)

- NPM (package manager)
  - https://www.npmjs.com/
  - Package manager tracks everything that's been installed
  - Other package mananger examples - Composer (php)

  `npm install http-server -g`
  - program that you "run", install globally
    - installs usually to `/usr/local`
  - install locally for package managers like NPM, or build tools, or Libraries

  - Installs locally into the node folder `./node_modules`
  - .gitignore the `./node_modules`

#### Setup Node Project
  - Make folder `mkdir folder`
  - cd/folder `cd folder`
  - create initial source file `touch index.js`
  - initialize `npm init -y` `-y` fills in the verions, author and descriptions, etc
  - add .gitignore file and add node_modules (github/gitignore examples)

```
$ touch index.js
$ npm init -y  // initilize project
$ npm install --save fs // install module

const fs = require('fs'); // import module into index.js

$ node index.js // run file

```


#### Modules

```js
function add (a,b){
  return a+b;
}

function subtract (a,b){
  return a-b;
}

module.exports = {
  add,
  subtract
}

 // exports function in a module file
 function clown() {
   return 'ronald';
 }

module.exports = clown;

// since modules are objects
// it can be written like this as well
module.exports.add = add;
module.exports.subtract = subtract;

const fs = require('fs'); // fs is a core module
const atQuotes =  require('at-quotes')// npm module
const math = require('./math'); // custom file module
const people = require('people.json'); // parses the file because it knows its JSON

console.log(math.add(5,5));

console.log(clown()); // will return ronald
```
