'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('RegisterCtrl', function ($scope, $http) {
  $scope.hidden = true;
  $scope.failedPasswordMatch = true;
  $scope.failedLogin = true;
  $scope.registerClick = function() {
    if ($scope.confirmPassword === $scope.password) {
      var req = {
        method: 'POST',
        url: '/api/users/register',
        headers: {
          'Content-Type': "Application/json"
        },
        data: {
          username: $scope.username,
          password: $scope.password,
          confirmPassword: $scope.confirmPassword
        }
      };
      $http(req).then(function(data) {
        if (data.data.user) {
          $scope.hidden = false;
          $scope.failedLogin = true;
        } else {
          $scope.hidden = true;
          $scope.failedPasswordMatch = true;
          $scope.failedLogin = false;
        }
      }, function() {
        //error
      });
    } else {
      $scope.failedPasswordMatch = false;
      $scope.failedLogin = true;
      $scope.hidden = true;
    }

  };
  });
