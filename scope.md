### Scope

#### List of available variables and functions for use on the current line of code

- Global Scope
- Function Scope


#### Global
Available anywhere in the program.

Any variable defined outside of a function is in the global scope

```JavaScript
var name = 'mary';
console.log(window.name);
```

#### Function Scope
When a function is invoked ie called(), that function get its own scope

```JavaScript
var a = "outer";
function myFunction(){
  var b = "inner";
  console.log(a); //outer
  console.log(b); // inner
}
myFunction();

console.log(a); // outer
console.log(b); //uncaught ReferenceError: b is not defined

```


#### Shadowing
When a function defines a variable or a parameter with the same name as a variable in the scope outside of the function

The function variable *shadows* the outer scope variable

```JavaScript
var a = 'outer';

function myFunction(a) {
  console.log(a); // inner
}

function myFunctionAgain() {
  var a = 'inner again!'
  console.log(a); // inner again!
}

myFunction('inner');
myFunctionAgain();

console.log(a); // outer

```
