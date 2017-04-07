- Describe how hoisting works

**Hoisting**

**Variable declarations** are moved to the top of the scope

- ex. var state;
- Is hoisted to the top

**Variable definitions** (or assignment) stay wheere they are
ex. state = ready;

---

- Describe asychronous execution with the event loop using the words stack, heap, queue and tick

The event loop is a queue of callback functions.

- stack
- heap
- queue
- tick


---
#### Describe the various kinds of scope in JavaScript
**Global and Local**

- **Global variable** - any variable defined outside of a function

- **Lexical Scope** - any variable that is found in a function or related functions

- **Block Scope** - ex. let, scope limited to a block of code

---

#### List types and describe which ones are Primitive and which are Reference types

#### Primitive Types (copy of original value)
  - string
  - number
  - boolean
  - undefined
  - null
  - symbol (immutable string)


#### Reference Types (pointer to original value)
  - Objects
  - Arrays

---

#### Describe the difference between primitive and reference types
  - copy of original value
  - pointer to original value

---

#### Describe the difference between == and ===
  - == values are equal
  - === values are equal and same type

---

#### Define higher order functions


A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

---

#### Define and describe IIFEs and why they are used
  - IIFE (Immediately Invoked Function Expression)
  - () parens around a function call that is invoked
  - controls variable scope

---

#### Describe closures

Closure is the combination of a function and the lexical environment within which that function was declared
