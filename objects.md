### JS Objects

var obj = {key:value}

```javascript
var cat = {}

cat.firstName = "felix";
// same thing
// can pass in spaces or variables
cat["first Name"] = "felix";
// example of using a variable
var propertyName = "firstName";
cat[propertyName] = "felix";


console.log(cat);

```
#### Nested Objects

```js
var blog = {
  posts: [{
    title: 'Hello World',
    comments: [{
      body: 'wat',
      date: 'today'
    }, {
      body: 'who',
      date: 'today'// print this
    }]
  },{
    title: 'Who does this?',
    comments: [{
      body: 'wat?!',
      date: 'yesterday'
    }, {
      body: 'who',
      date: 'yesterday'
    }]
  }]
}

console.log(blog.posts[0].comments[1].date)
// same as
console.log(blog["posts"][0]["comments"][1]["date"])


// iterate through
for (var name in blog.posts[0]) {
  console.log(name);
}

```
