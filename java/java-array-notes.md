### Java Arrays
- Resources
    - https://docs.google.com/presentation/d/15Pvx09_spsLvV2ST5KCOAZJembz53X1Mf3YI63VTYBk/edit#slide=id.p
    - Cracking the coding interview Chapter 1 questions.


---
#### Success Criteria

- Identify arrays and array like structures
- Diagram an array
- Identify the members of an array
- Identify the Big O (access time) of each array member
- Identify problems that can be solved using arrays

---

#### Identity

- A collection of elements, each identified by an array index or key.
 - Can usually only contain a single type in statically typed/compiled languages
 - Must specify exact length
- An array is stored so that the position of each element can be computed from its index with a mathematical formula.
 - 1 or 0 or N based indexing
- The simplest type of data structure is a linear array, also called one-dimensional array.

---


#### Diagram

<img src="./images/java-array-memory-diagram.png" width="500">

Index/access into the array can then be determined using simple math
  - Starting memory location + index * size in bytes of type
  - The memory address of the 4th element (index 3) can be computed:  200 + 3*8 = 224

---

### When to use arrays
- Need to access the elements using the index.
- Know the size of the array before defining the memory.
- Speed when iterating through all the elements in the sequence.
- Memory constrained.
