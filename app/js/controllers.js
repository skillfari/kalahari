'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function UserProfileCtrl($scope, $routeParams, User) {
    $scope.phone = User.get({userId: $routeParams.userId}, function(user) {
        $scope.mainImageUrl = user.images[0];
    });
}
UserProfileCtrl.$inject = ['$scope', '$routeParams', 'User'];
