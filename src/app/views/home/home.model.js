(function() {
  'use strict';

  angular
    .module('mdr')
    .service('home', Home);

  /** @ngInject */
  function Home($resource, APIConfig) {
    return $resource(APIConfig.url,
      {},
      {
        'query': { method: 'GET' }
      });
  }
})();
