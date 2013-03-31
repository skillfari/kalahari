'use strict';

angular.module("skillfariApp.controllers", ['skillfariApp.controllers.board', 'skillfariApp.controllers.level', 'skillfariApp.controllers.main', 'skillfariApp.controllers.user']);
angular.module("skillfariApp.services", ['skillfariApp.services.board', 'skillfariApp.services.level', 'skillfariApp.services.user']);
angular.module("skillfariApp.directives", ['skillfariApp.directives.sfShownext']);
angular.module('skillfariApp', ['skillfariApp.controllers','skillfariApp.services', 'skillfariApp.directives', 'ui'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/users/:userId', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/users/:userId/boards/new', {
        templateUrl: 'views/boards_new.html',
        controller: 'BoardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
