app.controller('SearchCtrl', ['$scope', '$location', '$routeParams', 'Failure',
  function($scope, $location, $routeParams, Failure) {
    $scope.singleFailure = Failure.show({id: $routeParams["id"]});
    $scope.searchFailure = true;
    $scope.showRestaurant = function(restaurant) {
      $scope.singleRestaurant = restaurant;
      $scope.singleViolations = restaurant.violations;
      $scope.searchFailure = false;
      $scope.searchSingle = true;
    };
    $scope.showAll = function() {
      $location.path("/failures");
    };
    $scope.searchZip = function() {
      $location.path("/failures");
    };
    $scope.searchDate = function() {
      $location.path("/failures");
    }
  }]);