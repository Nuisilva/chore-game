var app = angular.module('choreGame');

app.directive('jobDisplay', function($firebaseArray, fb, $firebaseObject, $route){


	return {

		templateUrl: 'app/kidDash/dirjobDisplay.html',

		scope: {
			kid: '=',
			job: '=',
			index: '@'

		},

				

		controller : function($scope){



			$scope.addCoins = function(){
				ref = new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index)
				kidRef = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id));
		  		coinRef = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index + '/coins')); 
		  		var list = $firebaseArray(ref);
		  		list.$indexfor(ref)

		  		console.log("test")
		  		jobRef = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index)); 
		  		kidRef.$loaded(function(){
		  			console.log(kidRef)
		  			console.log(coinRef)

		  			kidRef.coins += Number(coinRef.$value) //number evaluates the value as a number

		  			kidRef.$save()

		  			jobRef.$remove();


		  		})


		  		
		  		

			}

			$scope.approve = function(){
			
			 jobApproveObj = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index));
		     jobApproveObj.$loaded(function(){
			    jobApproveObj.approve = false;
			    jobApproveObj.$save().then(function(res){
			    	alert("Job Submited to Mom", res)
			    }, function(err){
			    	console.log('Blahh...Broken', err)
			    })
				
		     })
		    
			}
			
		},	

	};
});	