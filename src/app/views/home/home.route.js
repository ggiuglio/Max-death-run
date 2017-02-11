(function() {
  'use strict';

  angular
    .module('mdr')
    .config(homeRoute);

  /** @ngInject */
  function homeRoute($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home?page',
        templateUrl: 'app/views/home/home.tpl.html',
        controller: 'HomeController',
        controllerAs: 'home',
        authenticate: true
      });
  }
})();
