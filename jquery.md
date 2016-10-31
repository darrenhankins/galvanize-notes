### jQuery
https://docs.google.com/presentation/d/1fYUQ3ICHxrCpWxe2Ndd7c1dGxcvKwQOY4gptbzrpajU/edit#slide=id.p

JavaScript Library

- Syntactic sugar
- Great for event handling


JavaScript must be below the jQuery link


$ === jQuery


#### Select Elements

Elements: `$('div')`
  - `$('div p')[0]` returns first `<p>` in the jQuery object array
  - `$('div').has('p')` returns first `<p>`
Class: `$('class')`


#### Traverse the DOM

- Examples
  - `parent()`
  - `children()`

- Storing a selection
  - `var divs = $('div');`
  - `divs.children()`
  - `var $divs = $('div');` var `$div` $ before variable name is only a naming convention to let other developers know that the var is an jQuery object

  - `document.getElementById('title')` === `$('#title')`

#### DOM Creation

  - `prepend()` `append()`
  - `before()` `after()`
  - `text()` `html()`

  - `$div.html(<p>Test</p>)`
  - `$div.html()` html() with no parameter will retrieve the contents of the tag
