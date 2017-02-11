(function () {
  'use strict';

  angular
  .module('mdr')
  .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state) {
    var onStateChange = $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState) {
      $rootScope.page = toState.name;
      $rootScope.fromState = fromState.name;

  
    });

    $rootScope.$on('$destroy', onStateChange);
  }
})();
