/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

var brainiacUsers = angular.module('brainiacUsers', []);

brainiacUsers.controller('brainiacController', ['$scope', function ($scope) {

  $scope.alert = "Brainiac App has made it through!";
  
}]);