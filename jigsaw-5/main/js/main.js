var APP = angular.module('cm.jigsaw', ['ngRoute', 'cm.app1']);

APP.config(['$routeProvider', '$sceDelegateProvider', '$locationProvider', function($routeProvider, $sceDelegateProvider, $locationProvider) {
  
  $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      'http://localhost:8080/**',
      'http://localhost:9090/**'
    ]);
    
  $routeProvider
  .when('/welcome', {
    templateUrl: 'http://localhost:8080/templates/welcome.html.tpl'
  })
  .when('/home', {
    templateUrl: 'http://localhost:8080/templates/home.html.tpl'
  })
  .otherwise({
    redirectTo: '/welcome'
  });
  
}]);
