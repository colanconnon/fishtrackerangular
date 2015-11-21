'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('LogoutCtrl', function() {
    if (localStorage.getItem('Token') !== null) {
      localStorage.clear();
      location.reload();
    } else {

    }



  });
