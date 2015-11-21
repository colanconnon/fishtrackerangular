'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:NewlakeCtrl
 * @description
 * # NewlakeCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('NewlakeCtrl', function ($scope, $http) {
   $scope.enteredLake = true;
    $scope.newLake = function(){
      var req = {
        method: "POST",
        url: 'http://localhost:3001/api/lake/',
        headers: {
          'Content-Type': "Application/json",
          'Authorization': "Bearer: " + localStorage.getItem('Token')
        },
        data: {
          'name': $scope.lake
        }
      };
      $http(req).then(function(data){
        $scope.enteredLake = false;
        $scope.lake = '';
        console.log(data);
      });
    };
  });
