app.controller('FailureCtrl', ['$scope', '$location', 'Failure',
  function($scope, $location, Failure) {
    $scope.allFailures = Failure.allFailures;
    $scope.failureIndex = false;
    $scope.showAll = function() {
      $scope.failureIndex = true;
    };
  }]);