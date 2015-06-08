angular.module('choreGame');
  app.controller('kidCreateCtrl', function ( $scope, kidRef, kidService, $firebaseObject) {
    $scope.kid = $firebaseObject(kidRef);

	$scope.kid.$loaded().then(function (kid) {
      console.log(kid);
    });

	$scope.createKid = function (name, password) {
      $scope.kid[name] = {
        name: name,
        password: password,
        points: 0,
        role: 'child'
      };
      $scope.kid.$save();
  	}

    $scope.remove = function(key){  //$index will give you the index of the ng-repeated item
      console.log(key)
      // var item = $scope.kid[key]
      var kidToRemoveRef = $firebaseObject(kidService.getKid(key))
      kidToRemoveRef.$remove();

    }

  });