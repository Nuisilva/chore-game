var app = angular.module('choreGame');

app.controller ('kidDashCtrl', function($scope, kidRef, $firebaseArray, kidService){

	$scope.kidJob = $firebaseArray(kidRef);
	// $scope.kidChores = $firebaseArray(kidChores);

	// console.log ($scope.kid)

	
});