angular.module('choreGame');
  app.controller('choreCreateCtrl', function ($scope, choreRef, $firebaseArray) {
    $scope.chore = $firebaseArray(choreRef);

	 $scope.createChore = function (title, discription) {
      $scope.chore.$add({
        title: title,
        discription: discription
      });
  	}

  	$scope.remove = function(index){  //$index will give you the index of the ng-repeated item

    var item = $scope.chore[index]

    $scope.chore.$remove(item);

    }
  });