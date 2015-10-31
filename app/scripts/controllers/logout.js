'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('LogoutCtrl', function () {
     localStorage.clear();
  });
