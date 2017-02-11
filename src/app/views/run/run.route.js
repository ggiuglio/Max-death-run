(function() {
  'use strict';

  angular
    .module('mdr')
    .config(runRoute);

  /** @ngInject */
  function runRoute($stateProvider) {
    $stateProvider
      .state('run', {
        url: '/run?page',
        templateUrl: 'app/views/run/run.tpl.html',
        controller: 'RunController',
        controllerAs: 'run',
        authenticate: true
      });
  }
})();
