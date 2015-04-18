app.controller('FailureCtrl', ['$scope', '$location', '$routeParams', 'Failure',
  function($scope, $location, $routeParams, Failure) {
    $scope.allFailures = Failure.index();
    $scope.failureIndex = false;
    $scope.failureSingle = false;
    $scope.zipForm = false;
    $scope.hideViews = function () {
      $scope.failureSingle = false;
      $scope.zipForm = false;
      $scope.dateForm = false;
      $scope.failureIndex = false;
    };
    $scope.showAll = function() {
      $scope.hideViews();
      $scope.failureIndex = true;
    };
    $scope.showRestaurant = function(restaurant) {
      $scope.singleRestaurant = restaurant;
      $scope.singleViolations = restaurant.violations;
      $scope.hideViews();
      $scope.failureSingle = true;
    };
    $scope.showMap = function() {
      window.open('https://www.google.com/maps/place/' + $scope.singleRestaurant.address)
    };
    $scope.searchZip = function() {
      $scope.hideViews();
      $scope.zipForm = true;
    };
    $scope.searchDate = function() {
      $scope.hideViews();
      $scope.dateForm = true;
    };
    $scope.submit = function(searchTerm) {
      if (String(searchTerm).length === 39) {
        $scope.dateToSearch = $scope.dateChange(searchTerm);
        $location.path("/failures/" + $scope.dateToSearch);
      } else {
        $location.path("/failures/" + searchTerm);
      }
    };
    $scope.dateChange = function(searchTerm) {
      var date = String(searchTerm);
      var month = date.slice(4,7);
      var day = date.slice(8,10);
      var year = date.slice(11,15);
      var mon;
      switch (month) {
        case "Jan":
          mon = "01";
          break;
        case "Feb":
          mon = "02";
          break;
        case "Mar":
          mon = "03";
          break;
        case "Apr":
          mon = "04";
          break;
        case "May":
          mon = "05";
          break;
        case "Jun":
          mon = "06";
          break;
        case "Jul":
          mon = "07";
          break;
        case "Aug":
          mon = "08";
          break;
        case "Sep":
          mon = "09";
          break;
        case "Oct":
          mon = "10";
          break;
        case "Nov":
          mon = "11";
          break;
        case "Dec":
          mon = "12";
          break;
      }
      var finalDate = (year + "-" + mon + "-" + day);
      return finalDate;
    };
  }]);





