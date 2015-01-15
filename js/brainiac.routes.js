/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

//configure our routes
angular.module('brainiacRoute', []).config(['$routeProvider', function ($routeProvider) {
  
  $routeProvider

    .when('/search', {
      templateUrl: 'search-users.html',
      controller: 'searchController'
    })

    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutController'
    /*})

    .otherwise({
      redirectTo: '/home'*/
    });

  /*$urlRouterProvider.otherwise('/home');

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
    });*/
}]);