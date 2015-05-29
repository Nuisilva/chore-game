var app = angular.module('choreGame');

app.service ('kidService', function(fb){

	this.kidList = function(){

		return new Firebase(fb.url + '/kidList');
	}

	this.getKid = function(kidId){

		return new Firebase(fb.url + '/kidList/' + kidId)   // capitalize new instance in (constructors)
	}

})