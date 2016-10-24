### CSS
- Cascading
- Style
- Sheet

- Separation of content from presentation
- Site-wide consistency
- Bandwidth
- Page-reformatting
- Accessibility

##### 3 ways to connect CSS to HTML
Used properly when in the `<head>` tag for external and internal. Inline is used within the element.
- Inline styles (on the element)
- Internal Style Sheet (in the head, add `<style>` tag)
- External Style Sheet (`<link rel="stylesheet" href="./css/style.css"> `)

- p {color: red}
- selector {property: value}
- declaring is everything in the {}
- everything is called a 'rule'
- CSS works 'right' to 'left' (ex nav.navigation ul li pu strong { right is implemented first })

##### Element Selectors
- `<h1> or <div> or <p>, etc`

##### Classes
- starts with period `.`
- .className {}

##### ID
- unique on the page
- only one element can have this id
- #idName {}

##### H1 tags
- Should only have on `<h1>`
- `<h1>` very important in SEO as a descriptive location

##### Element Selectors
- `div p {}`
- any 'p' inside the seclector
- Childs elements are overridden by parents (ex `<div><span>`) `<div>` overrides `<span>`

##### Box Model
- Content
- Padding
- Border
- Margin

![](./images/box-model-padding.png)
<!-- ![alt text][logo]
[logo]: ./images/box-model-padding.png -->

##### Inline v Block Elements
- Block is whole row, always start a new line
- Inline

##### em vs px
- 2em is twice the scale of 1em
- em is adaptive and responsive
- inherit (means inherit the parent attributes)

##### Layout Properties
- Float - allows elements to wrap around elements


##### Flex Box
- https://learn.galvanize.com/content/gSchool/html-css-curriculum/master/CSS/Flexbox.md
- https://flukeout.github.io/
- http://flexboxfroggy.com/
- https://wireframe.cc/

##### CSS includes various displays
Examples:
- div {
  display: inline-block;
}
- div {
  display: inline;
}
- div {
  display: flex;
}
- img {
  display: block;
}

- Elements with display:inline-block are like display:inline elements, but they can have a width and a height. That means that you can use an inline-block element as a block while flowing it within text or other elements. The <em> element has a display: inline; by default, because this tag is always used in a sentence.
