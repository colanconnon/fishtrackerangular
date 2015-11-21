'use strict';

/**
 * @ngdoc function
 * @name fishtrackerangularApp.controller:ViewlakesCtrl
 * @description
 * # ViewlakesCtrl
 * Controller of the fishtrackerangularApp
 */
angular.module('fishtrackerangularApp')
  .controller('ViewlakesCtrl', function($scope, $http, $route, $window) {
    $scope.lakeDeletedDiv = true;
    if (!localStorage.getItem("Token")) {
      window.location.replace('/notauthorized');
    };
    var req = {
      method: 'GET',
      url: 'http://localhost:3001/api/lake/',
      headers: {
        'Content-Type': "Application/json",
        'Authorization': "Bearer: " + localStorage.getItem('Token')
      }
    };
    $http(req).then(function(data) {
      $scope.lakes = data.data.lakes;
      console.log(JSON.stringify($scope.lakes));
    });
    $scope.newLake = function() {
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
      $http(req).then(function(data) {
        $scope.lake = '';
        console.log(data);
        console.log(data.data.lake);
        $scope.lakes.push(data.data.lake);

      });
    };

    $scope.confirmDelete = function() {
      var req = {
        method: "DELETE",
        url: "http://localhost:3001/api/lake/",
        headers: {
          'Content-Type': "Application/json",
          'Authorization': "Bearer: " + localStorage.getItem('Token')
        },
        data: {
          id: $scope.lakeToDelete._id
        }
      };
      $http(req).then(function(data) {
        if (data.data.error) {
          alert('You don\'t have permission to do that!!');
        } else if (data.data.success === true) {
          $scope.lakes.splice($scope.indexToDelete, 1);
          $scope.lakeToDelete = null;
          $scope.indexToDelete = null;
          $scope.lakeDeletedDiv = false;
          $window.scrollTo(0,0);

        }

      });

    };

    $scope.setDelete = function(index) {
      $scope.lakeToDelete = $scope.lakes[index];
      $scope.indexToDelete = index;
    };
  });
