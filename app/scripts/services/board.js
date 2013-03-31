'use strict';

angular.module('skillfariApp.services.board', ['ngResource'])
  .factory('Board',['$resource', function ($resource) {
    console.log("Hello");
    return $resource('users/:userId/boards/new', {}, {
        query: {method:'GET', params:{userId: '@id'}, isArray:true }
    });
  }]);
