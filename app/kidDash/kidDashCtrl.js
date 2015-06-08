var app = angular.module('choreGame');

app.controller ('kidDashCtrl', function($scope, $route, fb, kidRef, $firebaseArray, $firebaseObject, kidService){

	$scope.kidJob = $firebaseArray(kidRef);

	$scope.kid = $firebaseObject(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId))
			$scope.kidJobs = $firebaseArray(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId + '/jobs/'));
			var chores = $firebaseArray(new Firebase(fb.url + '/chorelist/'))
			// $scope.kidJobs.$loaded().then(function (kid) {
		    $scope.kidsChores = []
		    // console.log(chores)
		    $scope.kidJobs.$loaded(function(){
		    	chores.$loaded(function(){
		    		getChores();
		    	})
		    })

		    function getChores(){
			    for(var i = 0; i < $scope.kidJobs.length; i++){
			    	for(var j = 0; j < chores.length; j++){
			    		if($scope.kidJobs[i].id === chores[j].$id){
			    			$scope.kidsChores.push(chores[j])
			    		}
			    	}
			    }
			    // console.log($scope.kidJobs);
			    console.log($scope.kidsChores);
		    }
	// $scope.kidChores = $firebaseArray(kidChores);

	// console.log ($scope.kid)

	
});