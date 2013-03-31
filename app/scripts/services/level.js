'use strict';

angular.module('skillfariApp.services.level', ['ngResource'])
  .factory('Level', ['$resource', function ($resource) {
        return $resource('levels/levels.json');
    }]);
