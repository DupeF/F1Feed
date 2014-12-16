'use strict';

/**
 * @ngdoc overview
 * @name f1FeedApp
 * @description
 * # f1FeedApp
 *
 * Main module of the application.
 */
angular
  .module('f1FeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '#',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
