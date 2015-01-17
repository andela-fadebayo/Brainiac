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
    })

    .when('/all-users', {
      templateUrl: 'all-users.html',
      controller: 'searchController'
    })

    .when('/create-profile', {
      templateUrl: 'create-profile.html',
      controller: 'createProfileController'
    })

    .when('/view-profile', {
      templateUrl: 'view-profile.html',
      controller: 'viewProfileController'
    });

    /*.otherwise({
      redirectTo: '/home'
    });*/

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