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
     controller: 'kidDashCtrl',
        resolve: {
          kidsRef: function (kidService, $route) {
          return kidService.getKid($route.current.params.kidId);
          }
        }
     })

  .when('/parent', {
      templateUrl: 'app/parentDash/parentDash.html',
      controller: 'pDashCtrl',

      //directives have access to the controllers because they are injected here
      // you dont actually have to put them in the html for them to have access to the socpes
      resolve: {
        kidRef : function(kidService){
          return kidService.kidList();
          },
        
          choreRef : function(choreService){
            return choreService.choreList();
            }
          }
  })

  .when('/kid/:kidId', {
      templateUrl: 'app/kidDash/kidDash.html',
      controller: 'kidDashCtrl',
      resolve: {
        kidRef: function(kidService, $route){
          return kidService.getKid($route.current.params.kidId);
          },

        
        
        // kidChores : function(kidId){
        //   return choreService.getKidChore(kidId);
        //   }
      }
  })

  // login stuff  

  .when('/login',{
    templateUrl: 'app/FirebaseLogin/login.html',
    controller: 'LoginCtrl'
  })
  .when('/dashboard/:userId', {
    templateUrl: 'app/FirebaseLogin/dashboard.html',
    controller: 'DashboardCtrl',
    resolve: {
      userReference: function(firebaseService, $route){
        return firebaseService.getUser($route.current.params.userId);
      },
      thingsReference: function(firebaseService, $route){
        return firebaseService.getThings($route.current.params.userId);
      }
    }
  })
  .otherwise({
    redirectTo: '/kid'
  });
  

});
