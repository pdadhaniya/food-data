app.controller('FailureCtrl', ['$scope', '$location', '$routeParams', 'Failure',
  function($scope, $location, $routeParams, Failure) {
    $scope.allFailures = Failure.index();
    $scope.failureIndex = false;
    $scope.failureSingle = false;
    $scope.zipForm = false;
    $scope.zipResults = false;
    $scope.showAll = function() {
      $scope.failureIndex = true;
      $scope.failureSingle = false;
      $scope.zipForm = false;
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
    $scope.searchDate = function() {
      $scope.dateForm = true;
      $scope.failureIndex = false;
    }
    $scope.submit = function(zip) {
      if (String(zip).length === 39) {
        var date = String(zip);
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
        console.log(finalDate);
        // $location.path("/failures/" + )
      } else {
        $location.path("/failures/" + zip)
      }
    };
  }]);