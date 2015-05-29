angular.module('choreGame');
  app.controller('choreCreateCtrl', function ($scope, choreRef, $firebaseArray) {
    $scope.chore = $firebaseArray(choreRef);

	 $scope.createChore = function (title, discription) {
      $scope.chore.$add({
        title: title,
        discription: discription
      });
  	}
  });