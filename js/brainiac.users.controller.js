/*Brainiac Match-Me Application
Designed to consume matchMe API 
Fiyinfoluwa S. Adebayo
Andela final project (project 7)
13th January, 2015*/

//create the controller and inject Angular's $scope
var brainiacController = angular.module('brainiacController', ['brainiacServices']);

brainiacController.controller('searchController', ['$scope', 'brainiacService', function ($scope, brainiacService) {

  $scope.fetchUsers = function () {

    brainiacService.getUsers().success(function (data) {
      console.log("Your users: " + data);
      $scope.alert = "I'm here again.....here are all your users!";

      $scope.allUsers = [];

      angular.forEach(data, function (users, index) {
        $scope.allUsers.push(users);

        $scope.pix = users.picture_male;
      });
    });
  };

  $scope.fetchAUser = function () {

    if($scope.searchInput === "") {
      $scope.alert = "Please enter a username!";
    }
    else {
      brainiacService.getAUser($scope.searchInput).success(function (aUser) {
        console.log("i returned a user " + aUser);
        
        if(aUser.status === 404) {
          $scope.alert = aUser.message;
        }
        else {
          $scope.singleUser = [];

          angular.forEach(aUser, function (oneUser, index) {
            $scope.singleUser.push(oneUser);

            $scope.pix = oneUser.picture_female;
          });
        }
      });
    }
  };


}]);

brainiacController.controller('createProfileController', ['$scope', 'brainiacService', function ($scope, brainiacService) {

  $scope.alert = "Share your interests, likes and skillset by creating your profile now!";

}]);

brainiacController.controller('aboutController', ['$scope', function ($scope) {
  $scope.alert = "Here is a little info about myself...";
}]);