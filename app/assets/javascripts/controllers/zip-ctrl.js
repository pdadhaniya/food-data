app.controller('ZipCtrl', ['$scope', '$location', '$routeParams', 'Failure',
  function($scope, $location, $routeParams, Failure) {
    $scope.singleFailure = Failure.allFailures.get({id: $routeParams["id"]})
    // $scope.test = $routeParams
  }]);