### Merge Sort

[https://visualgo.net/sorting](https://visualgo.net/)

```
1.) Array less than 2, already sorted
2.) Otherwise, cut your array in half, sort two sub-arrays separately
3.) Sort smaller arrays using merge sort
4.) Merge two subarrays together, and return the merge array

```

---

#### Recursion


We need:
- a base case
- recursive step


```js
function firstGtRecursive(array, number){
  if(array[0] > number){
    return array[0];
  } else {
    return firstGtRecursive(array.slice(1), number);
  }
}


console.log(firstGtRecursive([1,2,3,4,5],3));
```
