var app = angular.module('choreGame');

app.controller("kidCtrl", function(kidService, kidsRef, kidRef, $bindTo, $firebaseObject, $firebaseArray, $scope){

    var kids = $firebaseObject(kidsRef);

    $scope.comments = $firebaseArray(commentsRef);

    
    kids.$bindTo($scope, "kids");
});