(function() {
  'use strict';

  angular
    .module('mdr')
    .config(config);

  /** @ngInject */
  function config($urlRouterProvider, $logProvider, $locationProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    
    //ui-route config
    $urlRouterProvider.otherwise('home');

    // Enable log
    $logProvider.debugEnabled(true);
 }
})();
