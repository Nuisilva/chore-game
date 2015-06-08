var app = angular.module('choreGame');

app.controller ('pDashCtrl', function($scope, kidRef, choreRef, $firebaseArray, kidService, choreService){

	$scope.kids = $firebaseArray(kidRef);
	$scope.chore = $firebaseArray(choreRef);
	$scope.chore.$loaded().then(function(anything){

		// console.log(anything)
	})

	
	

});