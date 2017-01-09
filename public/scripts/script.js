var verbose = false;

var myApp = angular.module( 'myApp', [] );

myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {
  $scope.allHeros = [];

  var clearForm = function() {
    //clear the form inputs
    $scope.aliasIn = '';
    $scope.firstNameIn = '';
    $scope.lastNameIn = '';
    $scope.cityIn = '';
    $scope.powerIn = '';
  }; // end clearForm

  $scope.addHero = function() {
    if (verbose) console.log('in addHero');
    //addemble heroToSend
    var heroToSend = {
      alias: $scope.aliasIn,
      first_name: $scope.firstNameIn,
      last_name: $scope.lastNameIn,
      city: $scope.cityIn,
      power_name: $scope.powerIn
    }; // end heroToSend
    if (verbose) console.log(heroToSend);
    //send object to the server
    $http({
      method: 'POST',
      url: '/hero',
      data: heroToSend
    }).then( function(response) {
      if (verbose) console.log(response);
      clearForm();
      $scope.getHeros();
    }); // end $http
  }; // end addHero

  $scope.getHeros = function() {
    if (verbose) console.log('in getHeros');
    $http({
      method: 'GET',
      url: '/hero'
    }).then(function(response) {
      if (verbose) console.log(response);
      $scope.allHeros = response.data;
    }); // end $http
  }; // end getHeros

}]); // end HeroController
