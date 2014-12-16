'use strict';

/**
 * @ngdoc function
 * @name f1FeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the f1FeedApp
 */
angular.module('f1FeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
