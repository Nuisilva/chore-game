var app = angular.module('choreGame');

app.directive('jobDisplay', function($firebaseArray, fb, $firebaseObject, $route){

	return {

		templateUrl: 'app/kidDash/dirjobDisplay.html',

		scope: {
			kid: '=',
			job: '=',
			role: '='


		},

			
		

		controller : function($scope){
			console.log($scope.job)
		},	

	};
});	