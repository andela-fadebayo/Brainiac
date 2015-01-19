/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/


//create services using .factory to perform all API calls
angular.module('brainiacServices', []).factory('brainiacService', function ($http) {

  //this object holds all the API calls that would be made
  //reference is made to each key-value pair from the controller
  var matchMeQuery = {};

  var rawUrl = "https://fiyin-matchme.herokuapp.com/api/users/";
  
  matchMeQuery.getUsers = function () {
    return $http.get(rawUrl);
  };

  matchMeQuery.getAUser = function (userInput) {
    var singleUrl = rawUrl + userInput
    return $http.get(singleUrl);
  };

  matchMeQuery.createUser = function (userObject) {
    return $http({
      method: 'POST',
      url: rawUrl,
      data: $.param(userObject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
  };

  return matchMeQuery;
});