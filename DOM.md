### DOM
http://slides.gteach.xyz/Frontend/DOM-Coding/intro-to-dom.md#/

#### Define the DOM
  - Document Object Model
  - DOM is an API, allows us to interact with HTML and CSS
  - Memory representation of the page
      - a way to represent the document as an Object
      - a way to interact with the document

  - Organized in a tree like form
    - HTML
      - `<head>`
        - css
      - `<body>`
        - `<h1>`
        - `<img>`


  - DOM Traversal
    - starts in root and traverse all the way to find what is being modified
    - #document
      - console `document.getElementsByTagName('h1')`
        - output `[h1,h1]`
        - `var h1 = document.getElementsByTagName('h1')[0]`
        - `secondh1`
        - outputs `<h1>title</h1>`
