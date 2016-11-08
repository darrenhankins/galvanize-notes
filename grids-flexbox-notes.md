# Grids

- ### Flexbox
  - think in terms of grids
  - rows and then columns inside the rows

```html
 <!-- make the layout mobile friendly -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
```

```css
body {
  color: #333;
  margin: 0;
  /* 100% of the view height "vh" */
  heigth: 100vh:
  display: flex:
  flex-direction: column;
  justify-content: space-between;
}

/* created a <section> with container id */
.container {
  /* 80% of the view width "vw" */
  width: 80vw;
  /* way to center something */
  margin: 0 auto;
}

.dark {
  /*  appled class to header since it will be used a gain */
  background: #333;
  color: grey;
}

/* HEADER */
header section {
  /* applies flexbox properties */
  display: flex;
  /* move item to right with space between */
  justify-content: space-between;
}

nav ul {
  display: flex;
  flex-direction: row;
}

ul li {
  /* 1em is relative to something, not 1px */
  paddiing: 1em;

}

<!-- MAIN -->
.articles {
  display: flex;
}

.post {
  /* text will wrap around when it floats */
  /* only used flex to wrap around text */
  /* not to position */
  float: left:
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}

.logo {
  width: 30%;
  heigth: 200px;
  margin: 0;
}
/* initially hide the hamburger menu */
.fa-bars {
  display: none;
}

/* MEDIA QUERIES */
@media (max-width: 800px) {
  .articles {
    flex-direction: column;
  }
  /* display the hamburger menu when size is width is less than 800px */
  .fa-bars {
    display: inline:
  }

  header nav {
    display: none;
  }
}

<!-- FOOTER -->
footer {
  padding: 1em;
}
```
### Responsive Design vs Adaptive Design
  - responsive to the size of the window
  - adaptive changes to rows only as the screen changes using media queries
