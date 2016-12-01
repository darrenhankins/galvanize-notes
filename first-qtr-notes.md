(Try to answer from memory first, but it's OK to look them up.)

- What are the types in JS? Which ones are primitive? Which ones are reference?
  - Primitive (numbers, boolean)
  - Reference (objects, arrays)

- What is the difference between primitive and reference types?
  - primitive actually holds a value (a specific number)
  - reference points to a value but does not hold it (array, object)

- What is the difference between == and ===?
  - == is equal to but not the same type value (performs type coercion)
  - === is equal to and the same type (does not perform type coercion)

- What is type coercion?
Type Coercion is the conversion of one type of object to a new object of a different type with similar content

Example:
2+"!"=2!

boolean == integer

- What are the different kinds of scope in JS? What are the differences between them?

- Scope
  - Global and
  - Function (Local)
  - Block
  - Lexical

Global is throughout the code, Local is isolated to the function

- What is a higher order function? Identify at least 2 higher order functions you've used.

A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

### Primative Types:

  - Boolean
  - null
  - undefined
  - Number
  - String
  - Symbol (in ES2015)

### Reference Types (only one)
  - Object (array, function)


  - difference between 'null' and 'undefined'
    - undefined declaring a variable without a value
    - null is equal to nothing
    - 'truthy' v 'falsy'


### Difference between Primitive v Reference
  - primitive is immutable
    - immutable == cannot change it!
      - space is fixed
