var app = angular.module('choreGame');

app.controller ('mainCtrl', function($scope, $location){


	$scope.go = function (path) {
  $location.path( path );
};
})