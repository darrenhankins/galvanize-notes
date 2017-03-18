### Linked List
February 27, 2107
##### [Slides](https://docs.google.com/presentation/d/1VmmQp-07Ed7i5iK8ZvDNB_4coZyEw1Pr0XrwFCtj128/edit#slide=id.p)

```js
function LinkedList(){
  this.head;
}

LinkedList.protype.add = function(value){
  var node = {value: value, next: null};
  if (!this.head) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
}

var ll = new LinkedList;
ll.add(5);
ll.add(526);
console.log(ll);

```
