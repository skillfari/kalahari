'use strict';

angular.module('skillfariApp.controllers.level', [])
    .controller('LevelCtrl', ['$scope', '$routeParams', 'Level', function ($scope, $routeParams, Level) {
        $scope.levels = Level.query();
    }]);
