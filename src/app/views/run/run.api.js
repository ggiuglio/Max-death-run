(function() {
  'use strict';

  angular
    .module('mdr')
    .service('runApi', runApi);

  /** @ngInject */
  function runApi(run) {

    return {
      getStudio: function () {

        return run.query().$promise;
      },


    }
  }
})();
