var app = angular.module('choreGame');

app.service ('choreService', function(fb){

	this.choreList = function(){

		return new Firebase(fb.url + '/chorelist');
	}

	this.getChore = function(threadId){

		return new Firebase(fb.url + '/chorelist/' + choreId)   // capitalize new instance in (constructors)
	}

	
});