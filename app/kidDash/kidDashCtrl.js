var app = angular.module('choreGame');

app.controller ('kidDashCtrl', function($scope, $stateParams, fb, kidRef, $firebaseArray, $firebaseObject, kidService){
	

	console.log("kidDashCtrl is WORKING")
	

	$scope.kid = $firebaseObject(kidRef)
	$scope.kidJobs = $firebaseObject(new Firebase(fb.url + '/kidList/' + $stateParams.kid + '/jobs/'))


	$scope.kidJobs.$loaded(function(){
		console.log($scope.kidJobs)
	})
	var test = new Firebase(fb.url + '/kidList/' + $stateParams.kidId )


	var list = $firebaseArray(test);
// list.$keyAt(1); // bravo
// list.$keyAt( list[1] );
	
});