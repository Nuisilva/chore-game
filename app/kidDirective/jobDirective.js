var app = angular.module('choreGame');

app.directive('dirJob', function(){

  return {
    	templateUrl: 'app/kidCreate/kid.html',
    	scope: {
    	
        chore: '='
    	
        },
    	
    	link: function(scope, element, attribute){
      

        },
        controller: function($scope){
           
              console.log(scope.chores)
         
        }
      };

});			