#### IIFE
- Immediately Invoked Function Expression
- Establishes its own scope and evoked Immediately
- Example

```js
(function(a,b){
  var sum = a+b;
})();
```

#### Hoisting
- moves functions and variable to the top of code execution
- Example

```js
// A function call when hoisted with work
console.log(dog);
function dog() {
  var name = 'dog';
}
//
console.log(name);
var name = 'dog';
// when a variable is hoisted to the top it becomes...
var name;
// so console.log(name); returns
// undefined

```

#### Higher Order Functions
- function with a
- Example

```js

$.get('somewebsite', Function() {

});

// or

document.body.addEventListener('click', function(){

});
```

#### Constructor Functions
- Example

```js

function Person(name, color){
  this.name = name;
  this.color = color;
  this.speak = function(){
    console.log('My name is', this.name);
  }
}

var cj = new Person('CJ', 'blue');
cj.speak();
```
