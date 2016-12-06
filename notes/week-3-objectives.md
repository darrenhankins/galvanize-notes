# AJAX
  - Asynchronous JavaScript and XML

  - What is Asynchronous?
    - multiple things happening, but can be executed at different times. Do not have to be sequential


  - "Method of exchanging data with the server without a page refresh"

  - client side script that can communicate with the server without a page refresh

  - Non blocking - code can run at any time

  - Callback - a function that will be called at another time


# DOM
  - The DOM (document object model) is the web page object allowing manipulation via JavaScript

  - API (application program interface)

  - Abstraction

  - The HTML document as an object in JavaScript

# jQuery
  - JavaScript library that allows a fast way to easily use the power of the JavaScript framework to manipulate the DOM

# XML
  - Extensible Markup Language
  - A representation of data

# JSON
  - JavaScript Object Notation
  - Structure syntax to describe data and use it with JavaScript


# JQuery Code

- JavaScript selecting an id tag

```js
document.getElementById('id')
```
- jQuery select id by tag

```js
$('#id')
```

- jQuery append the body `h1` tag

```js
$('body').append('<h1>Hello</h1>')

```

 - JavaScript Set the innerHTML to "Hello World"

```js
document.getElementById("demo").innerHTML = "Hello World";

```

- Creating a Click Handler on all  `<h1>` tags at the time of the function loaded

```js
$('h1').click(function(){
  console.log(this.textContent)
  })


```
