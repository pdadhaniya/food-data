app.controller('ZipCtrl', ['$scope', '$location', '$routeParams', 'Failure',
  function($scope, $location, $routeParams, Failure) {
    $scope.singleFailure = Failure.show({id: $routeParams["id"]});
    $scope.searchFailure = true;
  }]);