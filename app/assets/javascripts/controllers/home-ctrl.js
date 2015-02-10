app.controller('HomeCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.seeFailures = function() {
      $location.path('/failures')
    }
  }]);