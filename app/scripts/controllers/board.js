'use strict';

angular.module('skillfariApp.controllers.board', [])
  .controller('BoardCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.categories =
            [
                {
                    name: "Teach"
                },
                {   name: "Learn"
                }
            ];
  }]);
