app.controller('FailureCtrl', ['$scope', '$location', 'Failure',
  function($scope, $location, Failure) {
    $scope.allFailures = Failure.allFailures;
    $scope.failureIndex = false;
    $scope.failureSingle = false;
    $scope.showAll = function() {
      $scope.failureIndex = true;
      $scope.failureSingle = false;
    };
    $scope.showRestaurant = function(restaurant) {
      $scope.singleRestaurant = restaurant;
      // $scope.singleRestaurant.$promise.then(function(data) {
        $scope.singleViolations = restaurant.violations;
      // });
      console.log($scope.singleRestaurant);
      $scope.failureIndex = false;
      $scope.failureSingle = true;
    }
  }]);