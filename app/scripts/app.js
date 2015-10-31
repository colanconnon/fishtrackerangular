'use strict';

/**
 * @ngdoc overview
 * @name fishtrackerangularApp
 * @description
 * # fishtrackerangularApp
 *
 * Main module of the application.
 */
angular
  .module('fishtrackerangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/viewcatches',{
        templateUrl: 'views/viewcatches.html',
        controller: 'viewcatchesCtrl',
        controllerAs: 'viewcatches'
      })
      .when('/newlake', {
        templateUrl: 'views/newlake.html',
        controller: 'NewlakeCtrl',
        controllerAs: 'newlake'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when('/notauthorized', {
        templateUrl: 'views/notauthorized.html',
        controller: 'NotauthorizedCtrl',
        controllerAs: 'notauthorized'
      })
      .when('/newfishcatch', {
        templateUrl: 'views/newfishcatch.html',
        controller: 'NewfishcatchCtrl',
        controllerAs: 'newfishcatch'
      })
      .when('/viewlakes', {
        templateUrl: 'views/viewlakes.html',
        controller: 'ViewlakesCtrl',
        controllerAs: 'viewlakes'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  });
