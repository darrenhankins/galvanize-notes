### Writing and Evaluating JavaScript Expressions

- **Expression** - evaluates into something else
  - reverse("cat")
- **Statements** - command/instructions to the computer
  - var reverseCat = reverse("cat");
  - all statements end with semi-colon ;
- **Operators** (operands)
  - mathematically functions (`+ , - , * , / ,  %`
    - Operand + Operand
  - unary operators takes 1 operand (`!` , `++`)
  - binary - 2 operands (`+ , - , * , / ,  %`)
  - ternary - 3 operands `?`
    - Ex. `var someValue=(passedValue)?passedValue:defaultValue;`
    (condition)? expression returned if "truth-y": expression returned if is "false-sy";

<hr>
#### Conditional
  - if, else, ifelse, switch,


#### Loops
  - for, while, do while, recursive function call, for each,

  ##### Primative value
    - actually hold a value (Ex. 2 the number)

  ##### Reference value
    - refers/points to a value but does not hold it (variable)
    - arrays
    - objects
    - an array in JavaScript is an object that uses number for the keys

```
var buddy = 3;
<!-- pal get its own copy -->
var pal = buddy;
pal = pal + 1;
```
<hr>
#### Errors
  - Runtime Errors (when the program is being executed)
    - Ex. syntax error
  - Compile Time Error (won't run when compiled, white screen)

  - "JIT compilation" (just in time compile)

<hr>

- "Type" - type of data, how you want it to be treated
- Strong v Dynamic Type
- From a type standpoint, Function, arrays and objects are all objects
- store related data

#### Functions
  - Abstractions
  - is an object that takes in an arguments, parameters and returns a value
  - Side effect is if a function changes something outside the scope (ex changing a global variable)

  ```JavaScript
  function add2Number(first, second) {
    // can only return 1 value
    // put into an object if you need to return multiple values
    return first+second;
  }
  ```

#### Arrays
- '`index:value`' (ex `1:red`)

#### Objects
  - '`key:value`' (ex `car:red`)

  - `myObject["bestFriend"]` (can accept a value as well, over just a variable)
  - `myObject.bestFriend` (can accept just a value 'bestFriend')
