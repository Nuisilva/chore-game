var app = angular.module('choreGame');

app.controller ('kidDashCtrl', function($scope, $route, fb, kidRef, $firebaseArray, $firebaseObject, kidService){
	$scope.test = "test"
	

	$scope.kid = $firebaseObject(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId))
	$scope.kidJobs = $firebaseObject(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId + '/jobs/'))
	
	

	

	
});