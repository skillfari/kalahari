'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function UserCtrl($scope, $routeParams, User) {
    console.log($routeParams);
    $scope.user = User.get({userId: $routeParams.userId}, function(user) {
        console.log(user);
        $scope.id = user.id;
        $scope.boards = user.boards
    });
}
UserCtrl.$inject = ['$scope', '$routeParams', 'User'];

