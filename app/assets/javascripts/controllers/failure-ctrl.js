app.controller('FailureCtrl', ['$scope', '$location', '$routeParams', 'Failure',
  function($scope, $location, $routeParams, Failure) {
    $scope.allFailures = Failure.allFailures.query();
    $scope.failureIndex = false;
    $scope.failureSingle = false;
    $scope.zipForm = false;
    $scope.zipResults = false;
    $scope.showAll = function() {
      $scope.failureIndex = true;
      $scope.failureSingle = false;
    };
    $scope.showRestaurant = function(restaurant) {
      $scope.singleRestaurant = restaurant;
      $scope.singleViolations = restaurant.violations;
      $scope.failureIndex = false;
      $scope.failureSingle = true;
    };
    $scope.showMap = function() {
      window.open('https://www.google.com/maps/place/' + $scope.singleRestaurant.address)
    };
    $scope.searchZip = function() {
      $scope.zipForm = true;
      $scope.failureIndex = false;
    };
    $scope.submit = function(zip) {
      $location.path("/failures/" + zip)
      $scope.singleZip = Failure.allFailures.get({id: zip});
    };
  }]);