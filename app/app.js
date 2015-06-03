var app = angular.module('choreGame', ['firebase', 'ngRoute', 'angularjs-dropdown-multiselect']);
app.constant('fb', {
  url: 'https://choregame.firebaseio.com/'
})
app.config(function($routeProvider){
  $routeProvider
  .when('/chorecreate', {
  	 templateUrl : 'app/choreCreate/create.html',
  	 controller: 'choreCreateCtrl',
  	   resolve: {
  		    choreRef : function(choreService){
  			   return choreService.choreList();
  		   }
       }

  })
  .when('/kidcreate', {
     templateUrl : 'app/kidCreate/kidcreate.html',
     controller: 'kidCreateCtrl',
       resolve: {
          kidRef : function(kidService){
           return kidService.kidList();
         }
       }

  })

  .when('/kidcreate/:kidId', {
     templateUrl: 'app/kidCreate/kid.html',
     controller: 'kidCtrl',
        resolve: {
          kidsRef: function (kidService, $route) {
          return kidService.getKid($route.current.params.kidId);
          }
        }
     })

  .when('/parent', {
      templateUrl: 'app/parentDash/parentDash.html',
      controller: 'pDashCtrl',
      resolve: {
        kidRef : function(kidService){
          return kidService.kidList();
          },
        
          choreRef : function(choreService){
            return choreService.choreList();
            }
          }
  })

  .when('/kid', {
      templateUrl: 'app/kidDash/kidDash.html',
      // controller: 'pDashCtrl',
      resolve: {
        kidRef : function(kidService){
          return kidService.kidList();
          },
        
        choreRef : function(choreService){
          return choreService.choreList();
          }
        }
  })  
  .otherwise ({
      redirectTo: '/parent'
    })


});
