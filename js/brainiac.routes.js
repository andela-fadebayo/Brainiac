/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

//configure routes
angular.module('brainiacRoute', []).config(['$routeProvider', function ($routeProvider) {
  
  $routeProvider

    .when('Brainiac/search', {
      templateUrl: 'search-users.html',
      controller: 'searchController'
    })

    .when('Brainiac/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutController'
    })

    .when('Brainiac/all-users', {
      templateUrl: 'all-users.html',
      controller: 'searchController'
    })

    .when('Brainiac/create-profile', {
      templateUrl: 'create-profile.html',
      controller: 'createProfileController'
    })

    .when('Brainiac/view-profile', {
      templateUrl: 'view-profile.html',
      controller: 'viewProfileController'
    })

    .when('Brainiac/match-me', {
      templateUrl: 'match-me.html',
      controller: 'matchMeController'
    });
}]);