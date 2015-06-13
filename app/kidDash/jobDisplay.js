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

console.log($scope.job)

			$scope.addCoins = function(){
				ref = new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index)
				kidRef = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id));
		  		coinRef = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index + '/coins')); 
		  		jobRef = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index));
		     
		  		kidRef.$loaded(function(){
		  			kidRef.coins += Number(coinRef.$value)
		  			kidRef.$save().then(function(){

		  				jobRef.jobApproved = true;
		  				jobRef.$save();
		  			})
		  			

		  		})
			}

			
			$scope.submitJob = function(){
			
			 jobApproveObj = $firebaseObject(new Firebase(fb.url + '/kidList/' + $scope.kid.$id + '/jobs/' + $scope.index));
		     
		     console.log($scope.jobapproveObj)

		     jobApproveObj.$loaded(function(){
			    console.log($scope.jobapproveObj)
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