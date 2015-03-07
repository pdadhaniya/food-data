app.factory('Failure', ['$resource',
  function($resource) {
    var allFailures = $resource(
    // var zipFailure = $resource(
      "/failures/:id",
      {id: '@id'}, {}, {query: {method: 'GET', isArray:true}}
      // {query: {method: 'GET', params: {id: '@id'}, isArray:true}}
    );
    // // var zipFailure = $resource("/failures/:id",
    //   // {id: '@id', isArray:true}
    // // );
    return {
      allFailures: allFailures,
      // zipFailure: zipFailure
    };
    // return $resource('/failures/:id', {id: "@id"}, {
    //   allFailures: {
    //     method: 'get',
    //     url: '/failures/',
    //     isArray: true
    //   }
    // };
  }]);