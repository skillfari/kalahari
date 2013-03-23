'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('skillfariApp.services', ['ngResource']).
  value('version', '0.1').
    factory('User', function($resource){
        return $resource('users/:userId.json', {}, {
            query: {method:'GET', params:{userId:'@id'}, isArray:true}
        });
    });

//angular.module('skillfariApp.services', ['ngResource']).
//    factory('User', function($resource){
//        return $resource('users/:userId.json', {}, {
//            query: {method:'GET', params:{userId:'@id'}, isArray:true}
//        });
//    });