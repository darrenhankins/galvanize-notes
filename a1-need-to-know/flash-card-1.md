Explain Event Delegation
  -

---  

##### IIFE
- Immediately Invoked Function Expression
- Controls Variable Scope

```js
(function foo(){

})();

```

---

Writing a function as a Statement vs Expression

```js
function foo(){
  // a definition or a statement
}

var foo = function () {
  // an expression
  // resolve to a value, if its its undefined
}

```

---

##### Explain Hoisting

- All variable using `var` are hoisted to the top of the document
- They can be declared anywhere within the document

- `const` and `let` are variables that are not hoisted and block scoped
