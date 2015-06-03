var app = angular.module('choreGame');

app.directive('dirKid', function(fb, $firebaseArray, $firebaseObject){

  return {
    	templateUrl: 'app/kidCreate/kid.html',
    	scope: {
        kid: '=',
        chore: '=',
        //tried adding job below to the scope, didn't work
        //also added to parentDahs.html and caled it job.
        //havent commented that out.
        // job: '&'
      },
    	link: function(scope, element, attribute){
          
      // scope.job = choreModel
        
      },
      controller : function($scope){

        //this is comming from my app.js file and is a resolve?
        //it points to my firebase array is my understanding
        // $scope.kid = $firebaseArray(kidRef);

        //here i'm trying to put the choreModel into kidList.job
        // $scope.job = function (choreModeL){

        //   $scope.kid.$add({
        //     jobs: choreModel
        //   })
        // }
        
        var choreRef = new Firebase(fb.url + '/kidList/' + $scope.kid.$id)
        // var choreArr = $firebaseArray(choreRef);
        var choreObj = $firebaseObject(choreRef);

         console.log($scope.kid)
         $scope.choreModel = []
      	 $scope.settings = {
          displayProp: 'title',
          idProp: '$id',
          showCheckAll: false
         };
      
         $scope.event = {

            //i can see it working here, it adds to choreModel here
            onItemSelect : function(chore){
              choreObj.jobs = $scope.choreModel;
              choreObj.$save();
              console.log($scope.choreModel)
            }, 
            onItemDeselect: function(chore){
              choreObj.jobs = $scope.choreModel;
              choreObj.$save();

             // and takes away the object here. kinda fun to watch.
              console.log($scope.choreModel)
            }

          } 
   
   // controller (notes to keep my syntax errors down)
      }
  // return
  };

});			