//Declare app level module which depends on filters, and services
angular.module('skillfariApp', ['skillfariApp.filters', 'skillfariApp.services', 'skillfariApp.directives', 'skillfariApp.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/users/:userId', {templateUrl: 'partials/user_profile.html', controller: UserCtrl });
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

//angular.module('myApp', ['myApp.services']).
//    config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/users/:userId'), {templateUrl: 'partials/user_profile.html', controller: UserCtrl };
//        $routeProvider.otherwise({redirectTo: '/view1'});
//
//    }]);