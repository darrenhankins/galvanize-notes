#### Memory Diagrams
[http://pythontutor.com/](http://pythontutor.com/javascript.html#mode=edit)

```js
var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x || x;
        }
    }
}
var go = foo.baz.bar;

console.log(go()); // x = 3
console.log(foo.baz.bar()); // x = 1
// where a function is executed matters

```

| Global     |      |
| :------------- | :------------- |
| x       | 3       |
| foo       | (refers to x:2)       |

|  |   |
| :------------- | :------------- |
| x      | 2       |
| baz     | (refers to x:1)       |

|     |      |
| :------------- | :------------- |
| x       | 1       |
| bar       | (refers to function)       |

|     |      |
| :------------- | :------------- |
| this.x      | x    |
