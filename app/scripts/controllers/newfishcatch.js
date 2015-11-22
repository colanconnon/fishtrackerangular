'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:NewfishcatchCtrl
 * @description
 * # NewfishcatchCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('NewfishcatchCtrl', function ($scope, $http, $window) {
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('mapcanvas'), {
        center: {lat: 38.06539235133249, lng: -92.63671875},
        zoom: 3
      });
    }
    initMap();
    map.addListener('click', function(event) {
      alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() );
      document.getElementById('latitude').value = event.latLng.lat();
      document.getElementById('longitude').value = event.latLng.lng();
      $scope.$apply(function(){
        $scope.latitude =  event.latLng.lat();
        $scope.longitude = event.latLng.lng();
      });
    });

     $scope.catchEntered = true;
    var req1 = {
      method: 'GET',
      url: '/api/lake/',
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
        url: '/api/fishcatch/',
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
        $scope.details = '';
        $window.scrollTo(0,0);
      });
    };
  });
