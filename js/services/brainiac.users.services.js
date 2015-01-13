/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

var brainiacServices = angular.module('brainiacServices', []);

brainiacServices.factory('brainiacService', ['$http', function ($http) {

  var allUsers = {};

  allUsers.getAllUsers = function () {

    return $http.get("http://fiyin-matchme.herokuapp.com/api/users");
  };

}]);