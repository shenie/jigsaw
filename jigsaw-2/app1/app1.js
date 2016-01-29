
var cmGoogle = angular.module("cm.app1", []);

var APP = angular.module('cm.jigsaw', ['ngRoute', 'cm.app1']);

APP.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
  
  $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://srv*.assets.example.com/**',
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
    redirectTo: '/home'
  });  
}]);
