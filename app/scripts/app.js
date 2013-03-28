'use strict';

angular.module('skillfariApp', ['skillfariApp.services'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/users/:userId', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
