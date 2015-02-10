app.factory('Failure', ['$resource',
  function($resource) {
    var allFailures = $resource("/failures");
    return {
      allFailures: allFailures.query()
    };
  }]);