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

#### Conditional
  - if, else, ifelse, switch,

#### Loops
  - for, while, do while, recursive function call, for each,

  ##### Primative value
    - actually hold a value (Ex. 2 the number)

  ##### Reference value
    - refers to a value but does not hold it (variable)
    - arrays
    - objects
    - an array in JavaScript is an object that uses number for the keys

```
var buddy = 3;
<!-- pal get its own copy -->
var pal = buddy;
pal = pal + 1;
```
#### Errors
  - Runtime Errors (when the program runs)
    - Ex. syntax error
  - Compile Time Error (won't run, white screen)

  - "JIT compilation" (just in time compile)
