'use strict';


angular.module('fishtrackerangularApp')
  .controller('navCtrl', function($scope) {
    if (localStorage.getItem('Token') !== null) {
      $scope.loggedIn = true;
    } else {
      $scope.loggedIn = false;
    }
    

  });
