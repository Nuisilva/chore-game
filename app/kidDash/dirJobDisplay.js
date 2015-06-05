var app = angular.module('choreGame');

app.directive('jobKidDash', function($firebaseArray, fb, $firebaseObject, $route){

	return {

		templateUrl: 'app/kidDash/jobDisplay.html',

		// scope: {

		// 	kid: '='
		// },

		

		controller : function($scope){
			$scope.kid = $firebaseObject(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId))
			$scope.kidJobs = $firebaseArray(new Firebase(fb.url + '/kidList/' + $route.current.params.kidId + '/jobs/'));
			var chores = $firebaseArray(new Firebase(fb.url + '/chorelist/'))
			// $scope.kidJobs.$loaded().then(function (kid) {
		    $scope.kidsChores = []
		    // console.log(chores)
		    $scope.kidJobs.$loaded(function(){
		    	chores.$loaded(function(){
		    		getChores();
		    	})
		    })

		    function getChores(){
			    for(var i = 0; i < $scope.kidJobs.length; i++){
			    	for(var j = 0; j < chores.length; j++){
			    		if($scope.kidJobs[i].id === chores[j].$id){
			    			$scope.kidsChores.push(chores[j])
			    		}
			    	}
			    }
			    // console.log($scope.kidJobs);
			    console.log($scope.kidsChores);
		    }
		     

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