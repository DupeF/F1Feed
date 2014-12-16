'use strict';

angular.module('f1FeedApp').
	controller('driversController', function($scope, ergastAPIservice){

    $scope.nameFilter = null;
    $scope.driversList = [];

    ergastAPIservice.getDrivers().success(function(response) {
      console.log('API chargée');
      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

	});