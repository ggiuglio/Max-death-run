(function() {
  'use strict';

  var environments = {
    development: {
     url: 'http://ggiuglio.altervista.org',
      facebookId: ''
    },
    staging: {
     url: 'http://ggiuglio.altervista.org',
      facebookId: ''
    },
    rocket: {
      url: '',
      facebookId: ''
    },
    production: {
      url: 'http://ggiuglio.altervista.org/test',
      facebookId: ''
    }
  }, APP_ENV = '@APP_ENV@';

  // If the set environment is not valid, default to the first declared environment
  if (!APP_ENV || Object.keys(environments).indexOf(APP_ENV) === -1) {
    APP_ENV = Object.keys(environments)[0];
  }

  angular
    .module('mdr')
    .constant('APIConfig', environments[APP_ENV]);
})();
