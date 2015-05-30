angular.module('choreGame');
  app.controller('kidCreateCtrl', function ( $scope, kidRef, $firebaseArray) {
    $scope.kid = $firebaseArray(kidRef);

	$scope.kid.$loaded().then(function (kid) {
      console.log(kid);
    });

	$scope.createKid = function (name, password) {
      $scope.kid.$add({
        name: name,
        password: password,
        points: 0,
        jobs: [""],
        

      });
  	}

    $scope.remove = function(index){  //$index will give you the index of the ng-repeated item

    var item = $scope.kid[index]

    $scope.kid.$remove(item);

    }

  });