console.log('sourced');

var myApp = angular.module( 'myApp', [] );

myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {
  console.log('hero controller');

  $scope.addHero = function() {
    console.log('in addHero');
    //addemble heroToSend
    var heroToSend = {
      alias: $scope.aliasIn,
      first_name: $scope.firstNameIn,
      last_name: $scope.lastNameIn,
      city: $scope.cityIn,
      power_name: $scope.powerIn
    }; // end heroToSend
    console.log(heroToSend);
    //send object to the server
    $http({
      method: 'POST',
      url: '/hero',
      data: heroToSend
    }).then( function(response) {
      console.log(response);
    }); // end $http
  }; // end addHero

}]); // end HeroController
