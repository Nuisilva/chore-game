var app = angular.module('choreGame');

app.directive('dirKid', function(){

  return {
    	templateUrl: 'app/kidCreate/kid.html',
    	scope: {
        kid: '=',
        chore: '=',

      },
    	link: function(scope, element, attribute){
          
        element.on('click', function(){
        scope.show = !scope.show;
          scope.$apply();
          });
        

    		
        },
        controller: function($scope){
          
        
      
          // console.log($scope.kid);
          // console.log($scope.chore)
        }
      };

});			