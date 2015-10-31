'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:NewlakeCtrl
 * @description
 * # NewlakeCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('NewlakeCtrl', function () {
   $scope.catchEntered = true;
    var req1 = {
      method: 'GET',
      url: '/lake/',
      headers: {
        'Content-Type': "Application/json",
        'Authorization': "Bearer: " + localStorage.getItem('Token')
      }
    };
    $http(req1).then(function(data){
      $scope.lakes = data.data.lakes;
      console.log(JSON.stringify($scope.lakes));
    });
    
    $scope.newFishCatch = function(){
      var req = {
        method: 'POST',
        url: '/fishcatch/',
        headers:{
          'Content-Type': "Application/json",
          'Authorization': "Bearer: " + localStorage.getItem('Token')
        },
        data: {
          temperature: $scope.temperature,
          longitude: $scope.longitude,
          latitude: $scope.latitude,
          lake: $scope.lake,
          details: $scope.details
        }
      };
      $http(req).then(function(data){
        $scope.catchEntered = false;
        $scope.temperature = '';
        $scope.longitude = '';
        $scope.latitude = '';
        $scope.lake = '';
      });
    };
  });