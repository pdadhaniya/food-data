app.factory('Failure', ['$resource',
  function($resource) {
    return $resource("/failures/:id", {id: "@id"},
      {
        'index':  { method: 'GET', isArray: true },
        'show':   { method: 'GET', isArray: true }
      }
    );
  }]);