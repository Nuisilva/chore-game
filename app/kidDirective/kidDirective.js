var app = angular.module('choreGame');

app.directive('dirKid', function(){

  return {
    	templateUrl: 'app/kidCreate/kid.html',
    	scope: {
        kid: '=',
        chore: '='
      },
    	link: function(scope, element, attribute){
          
      
        
      },
      controller: function($scope){
        
        $scope.kidJob = [];
        
         
         $scope.choreModel = []
      	 $scope.settings = {
          displayProp: 'title',
          idProp: '$id',
          showCheckAll: false
         };
      
         $scope.event = {

            onItemSelect : function(chore){

              console.log($scope.choreModel)
            }, 
            onItemDeselect: function(chore){

             
              console.log($scope.choreModel)
            }

          } 
   
   // controller
      }
  // return
  };

});			