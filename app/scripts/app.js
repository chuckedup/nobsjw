'use strict';

/**
 * @ngdoc overview
 * @name nobsjwApp
 * @description
 * # nobsjwApp
 *
 * Main module of the application.
 */
angular
  .module('nobsjwApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
  });
