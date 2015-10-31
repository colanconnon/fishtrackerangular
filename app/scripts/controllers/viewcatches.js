'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:viewcatchesCtrl
 * @description
 * # ViewcatchesCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('viewcatchesCtrl', function ($scope,$http, $location) {

      $scope.fishCatchDeletedDiv = true;
      if(!localStorage.getItem("Token")){
          $location.path('/notauthorized');
      }
      var req = {
        method: 'GET',
        url: '/fishcatch/',
        headers: {
          'Content-Type': "Application/json",
          'Authorization': "Bearer: " + localStorage.getItem('Token')
        }
      };
      $http(req).then(function(data){
        $scope.fishCatches = data.data.fishCatches;
        console.log(JSON.stringify($scope.fishCatches));
      
        
      });
    
      $scope.confirmDelete = function(){
        console.log(JSON.stringify($scope.fishCatchToDelete));
        var req = {
          method: "DELETE",
          url: "/fishcatch/",
          headers: {
            'Content-Type': "Application/json",
            'Authorization': "Bearer: "+ localStorage.getItem('Token')
          },
          data: {
            id: $scope.fishCatchToDelete["_id"]
          }
        };
        $http(req).then(function(data){
          if(data.data.error){
            alert("You don't have permission to do that!!");
          }
          else if(data.data.success === true){
            $scope.fishCatches.splice($scope.indexToDelete, 1);
            $scope.fishCatchToDelete = null;
            $scope.indexToDelete = null;
            $scope.fishCatchDeletedDiv = false;
          }
        
        });
        
      };
      $scope.setDelete = function(index){
        $scope.fishCatchToDelete = $scope.fishCatches[index];
        $scope.indexToDelete = index;
      };
  });
