app.factory('Failure', ['$resource',
  function($resource) {
    var allFailures = $resource("/failures");
    var zipFailure = $resource("/failures/:id",
      {id: '@id', isArray:true}
    );
    return {
      allFailures: allFailures.query(),
      zipFailure: zipFailure
    };
  }]);