### Breakout $http and ui-router

https://www.youtube.com/watch?v=aC9nJnSp7uc&feature=youtu.be

https://github.com/w3cj/angular-ui-router-example

---
1.) Add Script
```js
<script src="https://unpkg.com/angular-ui-router@1.0.0-beta.3/release/angular-ui-router.js"></script>
```
```terminal
$ yarn add angular-ui-router@1.0.0-beta.3


```
```js
<script src="/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>

```

2.) Register the Module
```js
angular.module('app', [])

```
register dependency module `ui-router`
```js
angular.module('app', ['ui.router'])

```

3.) Define a route
- In a separate file, probably named app.config.js or app.routes.js or app.states.js, add the following:

```js
(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    // $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app',
      })
  }

}());

```
4.) Add ui-view
- In your index.html file, place the following tag somewhere in the body:

```js
<ui-view></ui-view>

```
5.) Clean URL's: Turning on html5Mode

```js
$locationProvider.html5Mode(true)

```
```js
(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app',
      })
      // etc...
  }
}());

```
6.) Configuring the Base URL
- You do this by adding a `<base>` tag to the `<head>` of your index.html file:

```html
<base href="/">

```
