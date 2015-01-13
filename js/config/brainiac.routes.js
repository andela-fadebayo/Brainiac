/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

var brainiacRoutes = angular.module('brainiacRoutes', []);

brainiacRoutes.config('$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'brainiacController'
    });

  $locationProvider.html5Mode(true);

});