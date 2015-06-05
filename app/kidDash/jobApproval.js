var app = angular.module('choreGame');

app.service ('kidJobs', function(fb, $firebaseArray, $firebaseObject, kidRef)
{

	this.kidJobs = function(){

		return new Firebase(fb.url + '/kidList/' + kidId )

	// 	var approvePoints =  new Firebase(fb.url + kidRef + '/points/');

	// 	addPoints = function(kidRef){

	// 		approvePoints + 
	// 	}


	// }
})