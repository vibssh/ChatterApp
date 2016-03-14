/*jslint browser: true */
/*global angular, jQuery, console, $ */

(function () {
  'use strict';

  angular
    .module('chatterApp', [
      'firebase',
      'angular-md5',
      'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/login.html'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'auth/register.html'
        });
    }])
    .constant('FirebaseUrl', 'https://blinding-heat-6115.firebaseio.com/');
}());