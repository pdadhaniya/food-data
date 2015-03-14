app.controller('ZipCtrl', ['$scope', '$location', '$routeParams', 'Failure',
  function($scope, $location, $routeParams, Failure) {
    $scope.singleFailure = Failure.show({id: $routeParams["id"]});
    $scope.searchFailure = true;
    $scope.showRestaurant = function(restaurant) {
      $scope.singleRestaurant = restaurant;
      $scope.singleViolations = restaurant.violations;
      $scope.searchFailure = false;
      $scope.searchSingle = true;
    }
  }]);