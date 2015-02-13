app.factory('Failure', ['$resource',
  function($resource) {
    var allFailures = $resource("/failures/:id",
      {id: '@id', isArray:true}
    );
    // var zipFailure = $resource("/failures/:id",
      // {id: '@id', isArray:true}
    // );
    return {
      allFailures: allFailures
      // zipFailure: zipFailure
    };
  }]);