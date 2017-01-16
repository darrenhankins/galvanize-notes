### Angular

Full-featured SPA framework

- MVVM model view - view model
  - watches for changes in the view
  - 2 way data binding


- Single page applications (SPA's)
  - DOM Manipulation
  - History
  - Module Loading
    - Routing
    - Caching


view <- $scope -> contoller

`$scope` is the glue

---
Break-out Jan 16, 2017

https://www.youtube.com/watch?v=hCp43wqzoD0&feature=youtu.be

"controller as" vs $scope
aka
How to read pre-1.5 code

```js
.component('greeting', {
      controller: function () {
        const vm = this

        vm.$onInit = function () {
          vm.time = new Date()
        }

        vm.updateTime = function () {
          vm.time = new Date()
        }
      },

      template: `
        <p>What time is it?</p>
        <p>{{$ctrl.time}}</p>
        <input type="submit" value="Update Time" ng-click="$ctrl.updateTime()" />
      `
    })

  ng-model="$ctrl.time" // in the form

```
