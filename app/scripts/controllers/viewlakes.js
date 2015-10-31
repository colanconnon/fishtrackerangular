'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:ViewlakesCtrl
 * @description
 * # ViewlakesCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('ViewlakesCtrl', function ($scope, $http) {
    if(!localStorage.getItem("Token")){
      window.location.replace('/notauthorized');
    };
    var req = {
      method: 'GET',
      url: '/api/lake/',
      headers: {
        'Content-Type': "Application/json",
        'Authorization': "Bearer: " + localStorage.getItem('Token')
      }
    };
    $http(req).then(function(data){
      $scope.lakes = data.data.lakes;
      console.log(JSON.stringify($scope.lakes));
    });
  });
