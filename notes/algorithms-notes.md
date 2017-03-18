### Algorithms and Big O
https://github.com/gSchool/computer-science-curriculum/blob/master/Unit-1/02-big-o-notation.md

Algorithms - set of steps to solve a certain problem

---

- have a goal, terminate at some point in time (deterministic)
- take an input, and produce output
- generally very reusable between unrelated problem sets

---

##### Big O
Big O - Allows programmers to discuss the complexity of an algorithm and understand how fast the runtime will grow given its input, in the worst case (elevator pitch)


Big O notation is to classify algorithms by how they respond to changes in input size, such as how the processing time of an algorithm changes as problem size becomes extremely large

---
[http://bigocheatsheet.com/](http://bigocheatsheet.com/)


<img src="./images/big-o-complexity.png" width="600">
<img src="./images/big-o-complexity2.jpg" width="600">

Types
- Constant time
- linear
- Exponential

---

- Example: O(1)
- `constant`
- No inputs
```js
function print50Nums(){
  for (var i=0;i<50; i++){
    console.log(i);
  }
}
```
---

- Example: O(n)
- `linear`

```js
function sum(numbers){
  var total = 0;
  for (var i=0;i<50; i++){
    total += numbers[i];
  }
  return total;
}

```
---

- Example: O(n^2)
- Exponential

```js
// Matrix
// [[9,5,7],
//  [4,2,6],
//  [3,1,5]]
function sumMatrix(matric){
  var total = 0;
  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col<matrix) ...
    ...
  }
  return total;
}


```
