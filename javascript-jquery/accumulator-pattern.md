# Accumulator Pattern

Objective: Write functions that use the accumulator pattern to solve problems

## Success Criteria

- Define a function using the correct number of parameters
- Declare and initialize an accumulator with a sensible default (and return it)
- Iterate for the correct number of times
- Alter the accumulator

## Rationale

The basic accumulator pattern is the basis for a huge number of algorithms. Once you know how to solve basic problems using accumulator patterns you will have a strong fundamentals in algorithm design.

## How to get started

Right off the bat, it's important to know that you don't generally write code the way you write English. When you write in English, you write top-to-bottom, left-to-right. When you write code it's often best to write code from the outside in.

## Accumulator Pattern: Basic Steps

- Define the function
- Declare and return the result variable
- Set up the iteration
- Alter the accumulator as necessary

## Detailed Steps

- Identify the inputs and write a function definition with those inputs
- Identify the output
- Define the result variable and return it
- Determine how to iterate
- Alter the accumulator result inside the iteration


A.  Identify the inputs and write a function definition with those inputs
  1. How many are there?
  2. What are their types?

```javascript
function joinWords (words) {
}
```

B. Identify the output
  1. What will the function return when the input is normal?
  2. When will the function return when the input is empty?

C. Define the result variable and return it
Initialize it to whatever the output is in the empty case

```javascript
function joinWords (words) {
 var result = "";

 return result;
}
```

D. Determine how to iterate
How many times are you going to iterate?

```javascript
function joinWords (words) {
 var result = "";
 for (var i = 0; i < words.length; i++) {
 }
 return result;
}
```

E. Alter the accumulator result, using the information from the loop

```javascript
function joinWords (words) {
  var result = "";
  for (var i = 0; i < words.length; i++) {
    result += words[i];
  }
  return result;
}
```
