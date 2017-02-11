(function() {
  'use strict';

  angular
    .module('mdr')
    .service('run', Run);

  /** @ngInject */
  function Run($resource, APIConfig) {
    return $resource(APIConfig.url,
      {},
      {
        'query': { method: 'GET' }
      });
  }
})();
