(function() {
  'use strict';

  angular
    .module('mdr')
    .service('homeApi', homeApi);

  /** @ngInject */
  function homeApi(home) {

    return {
      getStudio: function () {

        return home.query().$promise;
      },

    
    }
  }
})();
