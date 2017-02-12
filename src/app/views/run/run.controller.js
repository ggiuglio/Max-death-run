(function() {
    'use strict';

    angular
      .module('mdr')
      .controller('RunController', RunController);

  /** @ngInject */
  function RunController($scope, $state, $window, $timeout) {
    var vm = this;
    if ($window.innerWidth < 768) {
      vm.gameWidth = $window.innerWidth;
      vm.gameHeight = 300;
    } else {
      vm.gameWidth = $window.innerWidth;
      vm.gameHeight =  $window.innerHeight;
    }

  }

})();
