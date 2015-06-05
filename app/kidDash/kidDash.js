var app = angular.module('choreGame');

app.directive('dirKidDash', function($firebaseArray, fb, $firebaseObject, $route){

	return {

		templateUrl: 'app/kidDash/dirKidDash.html',

		scope: {

			kid: '='
		},

		

		controller : function($scope){
			
			$scope.kidJobs = $firebaseArray(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId + '/jobs'))
			$scope.kidJobs.$loaded().then(function (kid) {
		      // console.log($scope.kidJobs);
		    });
		}

	};
});	