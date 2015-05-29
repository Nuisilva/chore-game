var app = angular.module('choreGame');

app.controller ('pDashCtrl', function($scope, kidRef, choreRef, $firebaseArray, kidService, choreService){

	$scope.kid = $firebaseArray(kidRef);
	$scope.chore = $firebaseArray(choreRef);
});