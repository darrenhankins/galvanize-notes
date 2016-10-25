### Higher Order Functions

- function that takes another function as arguments
- function that returns a function


- Defining a function - we use parameters


- functional programming approach
- first class citizens


- declaring a function
- calling a function


https://github.com/gSchool/map-filter-reduce-exercises

```JavaScript
var number1 = 1;
var number2 = 2;

function sum(number1,number2) {
  console.log(number1+number2);
}

// execute (call or invoke)
sum(2,3);

```

```JavaScript
var numbers = [1,2,3,4];

function sum(listOfNumbers) {
  var sumOfNumbers = 0;
  for (var i=0; i<listOfNumbers.length; i++){
    productOfNumbers = listOfNumbers[1]*productOfNumbers;
  }
  console.log(productOfNumbers);
}

function doMath(fn, numbers) {
  // fn is a placeholder function for the 'sum' function
  fn(numbers);
}

doMath(sum, numbers);

```

```JavaScript

function add(number) {
  return function addThree(){
    return number+3;
  }
}

var result = add(10); // result =[Function: addThree]
console.log(result()); // execute addThree()

// returns 13

```
