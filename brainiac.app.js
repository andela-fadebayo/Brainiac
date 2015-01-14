/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

//create a module for brainiac app and assign it to brainiacApp
var brainiacApp = angular.module('brainiacApp', ['ui.router']);

//configure our routes
brainiacApp.config(function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl : 'views/home.html',
      controller: 'mainController'
    })

    .state('users', {
      url: '/users',
      templateUrl : 'views/users.html',
      controller: 'usersController'
    });
});

//create the controller and inject Angular's $scope
brainiacApp.controller('mainController', function ($scope) {
  $scope.alert = "Hello guys....this is a message from main controller!";
});

brainiacApp.controller('usersController', function ($scope) {
  $scope.alert = "I'm here again.....here are all your users!";
});