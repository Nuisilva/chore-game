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
        console.log($scope.kid)
      //cant call an add on a single object. You have to call a $add on the entire array/object
      //so creating a new Firebase object will allow you to call a .add on it.
        
        var choreRef = new Firebase(fb.url + '/kidList/' + $scope.kid.$id)

      //the chrore ref is a constructor that will allow me to get the id and add to a location
      //it finds the single object in the fb array and allows me to use it.
      // It finds it by the $scope.kid.$id because each directive repeated is a new directive
      // so this finds the one directive i want to be using.
        // var choreArr = $firebaseArray(choreRef);
        var choreObj = $firebaseObject(choreRef);

         
         $scope.choreModel = []
      	 $scope.settings = {
          displayProp: 'title',
          idProp: '$id',
          showCheckAll: false,
          showUncheckAll: false
         };
      
         $scope.event = {

            onItemSelect : function(chore){
             
              choreObj.jobs = $scope.choreModel;
              choreObj.$save();
             

              //this is saving it to the firebase array. .$add will add to teh array
              //$save will replace all the information that is in the object. To use an
              //array you have to call the specific key because fb does not use actuall arrays
              // it still has to look for the property on the key.
            }, 
            onItemDeselect: function(chore){
              choreObj.jobs = $scope.choreModel;
              choreObj.$save();

             // this saves because it's simply saving nothing on top of existing
             
            }

          } 
   
   // controller (notes to keep my syntax errors down)
      }
  // return
  };

});			