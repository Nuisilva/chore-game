var app = angular.module('choreGame');

app.directive('dirJob', function(){

  return {
    	templateUrl: 'app/kidCreate/kid.html',
    	
    	link: function(scope, element, attribute){
      

        },
        controller: function($scope){
           
              
          console.log($scope.chore)
        }
      };

});			