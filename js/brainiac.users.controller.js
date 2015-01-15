/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

//create the controller and inject Angular's $scope
var brainiacController = angular.module('brainiacController', []);

brainiacController.controller('searchController', ['$scope', function ($scope) {
  $scope.alert = "I'm here again.....here are all your users!";
}]);

brainiacController.controller('aboutController', ['$scope', function ($scope) {
  $scope.alert = "Here is a little info about myself...";
}]);