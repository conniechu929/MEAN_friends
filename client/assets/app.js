var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/show.html'
    })
    .when('/show/:id', {
      templateUrl: 'partials/showone.html',
      controller: 'showController'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'newController'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'editController'
    })
    .when('/delete/:id', {
      templateUrl: 'partials/delete.html',
      controller: 'showController'
    })
    .otherwise({
      redirectTo: '/'
    })
  });
