/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

//create the controller and inject Angular's $scope
var brainiacController = angular.module('brainiacController', ['brainiacServices']);

brainiacController

.controller('searchController', ['$scope', '$location', 'brainiacService', '$localStorage', '$sessionStorage', function ($scope, $location, brainiacService, $localStorage, $sessionStorage) {

  $scope.pageClass = 'page-search';

  
  $localStorage.person = "Simeon";

  $scope.viewProfile = function (namePassed) {
    console.log("'see more' button clicked!");
    // $scope.names = nameSearch;
    console.log("name passed: " + namePassed);

    // $localStorage.names = namePassed;

    $localStorage.allUsersPassed = namePassed;
    // $scope.person = "Simeon";
    $location.path('/view-profile');
  };

  $scope.fetchUsers = function () {

    brainiacService.getUsers().success(function (data) {
      console.log("Your users: " + data);
      $scope.alert = "I'm here again.....here are all users!";

      $scope.allUsers = [];

      angular.forEach(data, function (users, index) {
        $scope.allUsers.push(users);
      });
    });
  };

  $scope.fetchAUser = function () {
    var searchInputSmall = $scope.searchInput;

    console.log("small letter " + searchInputSmall);

    if(searchInputSmall === "") {
      $scope.alert = "Please enter a username!";
    }
    else {
      $scope.alert = "";
      brainiacService.getAUser(searchInputSmall).success(function (aUser) {
        console.log("i returned a user " + aUser);
        
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

.controller('createProfileController', ['$scope', 'brainiacService', function ($scope, brainiacService) {

  $scope.pageClass = 'page-create-profile';

  $scope.alert = "Share your interests, likes and skillset by creating your profile now!";

  $scope.submitUserProfile = function (userObject) {

    var userObjectInput = userObject;

    brainiacService.createUser(userObjectInput)
    .success(function (data, status) {
      $scope.statusOutput = "Welcome...your profile has been created!";
    })
    .error(function (data, status) {
      $scope.statusOutput = "An error occured. Check your inputs and try again!"
    });
  };
}])

.controller('aboutController', ['$scope', function ($scope) {
  $scope.alert = "Here is a little info about myself...";
}])


.controller('viewProfileController', ['$scope', 'brainiacService', '$location', '$localStorage', '$sessionStorage', function ($scope, brainiacService, $location, $localStorage, $sessionStorage) {
  // $scope.names = $localStorage.names;
  // $scope.viewProfile = function () {
  //   console.log("'see more' button clicked!");
    // $scope.names = nameSearch;
    $scope.person = $localStorage.person;
    // $scope.person = "Simeon";
  //   $location.path('/view-profile');
  // };

    $scope.allIndex = $localStorage.allUsersPassed;
  
  brainiacService.getAUser($scope.names).success(function (userData) {
    console.log("user profile of " + userData);

    $localStorage.myData = userData;

    $scope.firstName = userData.first_name;
    $scope.lastName = userData.last_name;
    $scope.slogan = userData.slogan;


    // $scope.passedUser = [];

    /*angular.forEach(userData, function (userSpec, index) {
      $scope.passedUser.push(userSpec);
    });
*/

  });


/*
      brainiacService.getAUser(searchInputSmall).success(function (aUser) {
        console.log("i returned a user " + aUser);
        
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
  };*/
}])


.controller('matchMeController', ['$scope', function ($scope) {

  $scope.intro = "Welcome to Match-Me Application";

}]);

