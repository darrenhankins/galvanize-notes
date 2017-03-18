### Graphs

---

  Linear Data Structures
    - Array
    - Linked list
    - Stack
      - pop
      - push
    - Queue (lines)
      - onQueue
      - deQueue

---

#### Graphs are NON-linear data Structures
  - collection of objets or entities we call `nodes` or `vertices`
  - connected together with a set of `edges`
  - no rules dictating the connection between nodes


  - used extensively in math
  - computer science

#### Edges
  - can be either undirected or directed
    - `Undirected` = vertices represent an unordered pair, are connected both ways to nodes (v1=>v2 or v2=>v1)
    - `Directed` = vertices represent an ordered pair, point from one node to another, they now have direction (v1=>v2 only)

---
#### Directed Graph (uni-directional)
<img src="images/directed-graphic.png" width="400">

#### Undirected Graph (bi-directional)
<img src="images/undirected-graphic.png" width="400">

---

Graph Traversal (ex. web crawlers) act of visiting all nodes in a graph

---

Problems Graphs Solve
- Accessible Data Storage (binary Tree)
- Trees (DOM, XML, etc)
- Flow Control
- Abstract Syntex tress
- Nueral networks

---

#### Weighted vs Unweighted
  - assigning value to each edge

#### Cyclic vs Acyclic
  - Cyclic - if a path can be followed from a node back to the same node without repeating edges

#### Connected vs. Disconnected
- graph made out of two or more sub-graphs

- Undirected
- Weighted
- Cyclic
- Connected

---

Graphs stored in to types, Adjacency Matrix and Adjacency List

---

#### Adjacency Matrix

Adjacency Matrix: Undirected Graph
  -  2 dimensional array N*N, where N is the number of vertices
  - an edge between two vertices i, j, A[i][j] is represented as a 1, no edge is a zero

Adjacency Matrix: Directed
   - represented by a (negative) -1 or (positive) 1 number

Adjacency Matrix: Weighted Directed
  - Store the weight of the edge instead of 1

---

#### Adjacency List: Unweighted Directed

---

### Complexity
  - The basic operations of a graph are:
    - adding an edge
    - deleting and edge
    - Answering the questions "is there an edge between i and j"
    - finding the successors of a given
