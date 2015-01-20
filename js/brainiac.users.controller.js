/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

//create the controller and inject Angular's $scope
var brainiacController = angular.module('brainiacController', ['brainiacServices']);

brainiacController

.controller('searchController', ['$scope', '$location', 'brainiacService', '$localStorage', '$sessionStorage', function ($scope, $location, brainiacService, $localStorage, $sessionStorage) {

  $scope.viewProfile = function (namePassed) {
    $localStorage.allUsersPassed = namePassed;
    $location.path('/view-profile');
  };

  $scope.fetchUsers = function () {
    brainiacService.getUsers().success(function (data) {    
      $scope.alert = "I'm here again.....here are all users!";
      $scope.allUsers = [];
      angular.forEach(data, function (users, index) {
        $scope.allUsers.push(users);
      });
    });
  };

  $scope.fetchAUser = function () {
    var searchInputSmall = $scope.searchInput;
    if(searchInputSmall === "") {
      $scope.alert = "Please enter a username!";
    }
    else {
      $scope.alert = "";
      brainiacService.getAUser(searchInputSmall).success(function (aUser) {        
        if(aUser.status === 404) {
          $scope.alert = aUser.message;
        }
        else {
          $scope.singleUser = [];
          angular.forEach(aUser, function (oneUser, index) {
            $scope.singleUser.push(oneUser);
          });
        }
      });
    }
  };
}])


.controller('createProfileController', ['$scope', 'brainiacService', '$location', '$localStorage', '$sessionStorage', function ($scope, brainiacService, $location, $localStorage, $sessionStorage) {
  $scope.alert = "Share your interests, likes and skillset by creating your profile now!";

  $scope.submitUserProfile = function (userObject) {
    var userObjectInput = userObject;
    $localStorage.allUsersPassed = userObject;

    brainiacService.createUser(userObjectInput)
    .success(function (data, status) {
      $scope.statusOutput = "Welcome...your profile has been created!";
      $localStorage.statusOutput = "Welcome...your profile has been created!";
      $location.path('/view-profile');
    })
    .error(function (data, status) {
      $scope.statusOutput = "An error occured. Check your inputs and try again!"
    });
  };
}])


.controller('aboutController', ['$scope', function ($scope) {
  $scope.alert = "Here's a little about myself...";
}])


.controller('viewProfileController', ['$scope', 'brainiacService', '$location', '$localStorage', '$sessionStorage', function ($scope, brainiacService, $location, $localStorage, $sessionStorage) {
    $scope.person = $localStorage.person;
    $scope.allIndex = $localStorage.allUsersPassed;
}])


.controller('matchMeController', ['$scope', 'brainiacService', '$location', '$localStorage', '$sessionStorage', function ($scope, brainiacService, $location, $localStorage, $sessionStorage) {
  $scope.intro = "Welcome to Match-Me Hot Room!";

  brainiacService.getUsers()
    .success(function (data) {
      $scope.alert = "Find your match!!!";
      $scope.allUsers = [];
      angular.forEach(data, function (users, index) {
        $scope.allUsers.push(users);
      });
    })
    .error(function (errorData) {
      $scope.alert = "An error has occured!";
    });

    $scope.viewProfile = function (namePassed) {
    $localStorage.allUsersPassed = namePassed;
    $location.path('/view-profile');
  };
}]);