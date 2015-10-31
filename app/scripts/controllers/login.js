'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('LoginCtrl', function ($scope, $http) {
    if (localStorage.getItem('Token') !== null) {
      $scope.hidden = false;
    } else {
      $scope.hidden = true;
    }
    $scope.failedLogin = true;
    $scope.loginClick = function() {
      var req = {
        method: 'POST',
        url: '/users/Token',
        headers: {
          'Content-Type': 'Application/json'
        },
        data: {
          username: $scope.username,
          password: $scope.password
        }
      };
      $http(req).then(function(data) {
        if (data.data.token) {
          localStorage.setItem('Token', data.data.token);
          $scope.hidden = false;
          window.location.replace('/');
        } else {
          $scope.hidden = true;
          $scope.failedLogin = false;
        }
      }, function() {
        //error
        $scope.failedLogin = false;
      });
    };
  });
