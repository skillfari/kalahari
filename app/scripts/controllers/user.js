'use strict';

angular.module('skillfariApp.controllers.user', [])
  .controller('UserCtrl', ['$scope', '$routeParams', 'User', function ($scope, $routeParams, User) {
      $scope.user = User.get({userId: $routeParams.userId}, function(user) {
          $scope.id = user.id;
          $scope.boards = user.boards
      });
  }]);
