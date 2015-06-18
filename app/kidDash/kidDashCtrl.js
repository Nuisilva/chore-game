var app = angular.module('choreGame');

app.controller ('kidDashCtrl', function($scope, $stateParams, fb, kidRef, $firebaseArray, $firebaseObject, kidService){
	$scope.test = "test"
	

	$scope.kid = $firebaseObject(new Firebase(fb.url + '/kidList/' + $stateParams.kidId))
	$scope.kidJobs = $firebaseObject(new Firebase(fb.url + '/kidList/' + $stateParams.kidId + '/jobs/'))
	
	var test = new Firebase(fb.url + '/kidList/' + $stateParams.kidId )


	var list = $firebaseArray(test);
// list.$keyAt(1); // bravo
// list.$keyAt( list[1] );
console.log(list[1])
	
});