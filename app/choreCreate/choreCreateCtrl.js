angular.module('choreGame');
  app.controller('choreCreateCtrl', function ($scope, choreRef, $firebaseObject) {
    $scope.chore = $firebaseObject(choreRef);

	 $scope.createChore = function (title, discription, pointVal) {
      $scope.chore[title] = {
        title: title,
        discription: discription,
        pointVal: pointVal
      };
      $scope.chore.$save();
  	}

  	$scope.remove = function(index){  //$index will give you the index of the ng-repeated item

    var item = $scope.chore[key]

    $scope.chore.$remove(item);

    }
  });