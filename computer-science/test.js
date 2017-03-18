function BSTNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BSTNode.prototype.add = function (node) {
  if (node.value < this.value) {
    this.left ? this.left.add(node) : this.left = node;
  } else {
    this.right ? this.right.add(node) : this.right = node;
  }
}

// let bstn1 = new BSTNode(8);
// let bstn2 = new BSTNode(3);
// let bstn3 = new BSTNode(1);
// let bstn4 = new BSTNode(6);
// let bstn5 = new BSTNode(4);
// let bstn6 = new BSTNode(7);
// let bstn7 = new BSTNode(10);
// let bstn8 = new BSTNode(14);
// let bstn9 = new BSTNode(13);
//
// for (let i = 2; i < 10; i++) {
//   bstn1.add(window[`bstn${i}`]);
// }
//
//  function search(value, node) { return node | null}
bstn1.add(bstn2);
bstn1.add(bstn3);
bstn1.add(bstn4);
bstn1.add(bstn5);
bstn1.add(bstn6);
bstn1.add(bstn7);
bstn1.add(bstn8);
bstn1.add(bstn9);
