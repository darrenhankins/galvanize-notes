# Local Storage
- View: Developer: Developer Tools : Application tab: Local Storage

 - storage in browser
 - caching data
 - must be saved as a string, JSON.stringify() the object
 - window.localstorage


  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
  https://developer.mozilla.org/en-US/docs/Web/API/Storage


```
localStorage.setItem('preference', 'Tom');
console.log(localStorage.getItem("preference"));
if (!localStorage.getItem("preference")) {
  console.log("Nothing");
} else {
  console.log(localStorage.getItem("preference"));
}

// save as a object via JSON.stringify(), and retrieve with JSON.parse()
var secret = {
  setDate: "12/24/71",
  message: "abc"
}
localStorage.setItem('preference', JSON.stringify(secret));
var newSecret = JSON.parse(localStorage.getItem("preference"));
console.log(newSecret);

  ```
