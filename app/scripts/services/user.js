'use strict';

angular.module('skillfariApp.services.user', ['ngResource'])
  .factory('User', ['$resource', function ($resource) {
      return $resource('users/:userId.json', {}, {
          query: {method:'GET', params:{userId:'@id'}, isArray:true}
      });
  }]);
