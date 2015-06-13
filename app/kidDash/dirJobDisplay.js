var app = angular.module('choreGame');

app.directive('kidInfo', function($firebaseArray, fb, $firebaseObject, $route){

	return {

		templateUrl: 'app/kidDash/kidDisplay.html',
		scope: {
			
			kid: '=',
			// role: '='

		},


		

		controller : function($scope){

			
			// $scope.daKid = $firebaseObject(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId '/jobs' ));
		     
			
		    //this is the button for the kids that will add the approval methods onto the
		    //job that will update the parents list for that kid and allow the parents to approve
		    // or send it back to the kids

		    // $scope.jobFinished = function(kidRef){

		    	//need to look up the id of the job and use the points paramater off of the jod.id
		    	//there should be a pending placed on the kids, and a approve/redo button for the parents
		    	// $scope.kidJobs.$add ({

		    		// completed: function(kidRef, kidJobs){

		    			//probably need to add a bouleon value of if true hide, or transclude

		    			// choreApproval.jobApproval(kidRef);

		    	// 		}
		    	// 	}

		    	// })

		    // }
		    // });
		}

	};
});	