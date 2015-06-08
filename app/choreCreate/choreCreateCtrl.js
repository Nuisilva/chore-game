angular.module('choreGame');
  app.controller('choreCreateCtrl', function ($scope, choreRef, $firebaseObject, choreService) {
    $scope.chore = $firebaseObject(choreRef);
    $scope.currentValue = {};
    $scope.pointValues = [
        { id: '1',
          coins: 10
        },{
          id: '2',
          coins: 20
        },{
          id: '3',
          coins: 30
        },{
          id: '4',
          coins: 40 
        }
    ];
    

    	$scope.createChore = function (title, discription) {
      $scope.chore[title] = {
        title: title,
        discription: discription,
        coins: $scope.currentValue.coins,
        approve: false
      };
      $scope.chore.$save();
  	};

  	$scope.remove = function(key){  //$index will give you the index of the ng-repeated item

     var choreToRemoveRef = $firebaseObject(choreService.getChore(key))
      choreToRemoveRef.$remove();

    };
  });