var app = angular.module('choreGame');

app.directive('dirJobDisplay', function(){

	return {

		templateUrl: 'app/kidDash/jobDisplay.html',

	},

	controller = function(){

		console.log('Job Display is Working');
	};
});