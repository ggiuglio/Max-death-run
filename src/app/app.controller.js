(function () {
  'use strict';

  angular
    .module('mdr')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($state, $scope, $rootScope, $timeout, $window) {
    var vm = this;

    $scope.scroll = 0;
    $scope.menu = false;

    $scope.toggleMenu = function () {
    	$scope.menu = !$scope.menu;
    };

    $scope.goTo = function (state, tab) {
    	$scope.toggleMenu();
		  $state.go(state, {page: tab});
    }

  }
})();
