'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:CatchdetailsCtrl
 * @description
 * # CatchdetailsCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('CatchdetailsCtrl', function ($scope,$routeParams,$http) {
    $scope.fishCatchId = $routeParams.fishCatchId;

    var req = {
      url : "/api/fishcatch/catchdetail/" + $scope.fishCatchId,
      method: "GET",
      headers: {
        'Content-Type': "Application/json",
        'Authorization': "Bearer: " + localStorage.getItem('Token')
      }
    };

    $http(req).then(function(response){
      console.log(response.data);
       var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('mapcanvas'), {
          center: {lat: response.data.fishcatch.latitude, lng: response.data.fishcatch.longitude},
          zoom: 15
        });
        new google.maps.Marker({
              position: {lat: response.data.fishcatch.latitude, lng: response.data.fishcatch.longitude},
              map: map
          });
      }
      initMap();
      $scope.fishCatch = response.data.fishcatch;
    });

  });
