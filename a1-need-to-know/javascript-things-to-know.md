
#### Integer => String (vice versa)
```js

parseInt(str) or Number(str) // str to number
num.toString() // var num = 15; num.toString();

```

#### Strings
```js
str.split() //
str.substring(1,4); // get substring within a string

let word = "hotshosts";
let str = word.substring(1,4);
// returns letters at [1] through [3] "ots"

```

#### Arrays
```js
array.push(arr[i]); // arr[i] pushed into "array"
array.pop();

array.slice(1,3);
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

leftSorted.concat([pivotValue]).concat(rightSorted);
leftSorted.concat(rightSorted);

```

#### Variables
```js
var // assigning as a variable
const // block-scoped, similar to let. cannot change through re-assignment or be redeclared.
let // specific to Block Scope of code (anything surrounded by curly brackets)

```

#### Scope

1.) Block Scope `let`

2.) Functional Scope `javascript`

3.) Lexical Scoping (sometimes known as static scoping ) is a convention used with many programming languages that sets the scope (range of functionality) of a variable so that it may only be called (referenced) from within the block of code in which it is defined.
