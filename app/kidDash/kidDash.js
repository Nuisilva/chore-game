var app = angular.module('choreGame');

app.directive('dirKidDash', function(){

	return {

		templateUrl: 'app/kidDash/kidDash.html',

		

		controller : function($scope){

			console.log('Kid Dash Is Working!!');
			// console.log(chore);
		}

	};
});