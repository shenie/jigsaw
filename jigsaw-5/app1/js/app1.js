
var cmGoogle = angular.module("cm.app1", []);

cmGoogle.config(["$provide", "$httpProvider", function($provide, $httpProvider) {
  
  $provide.factory('GoogleTemplateUrlInterceptor', [function() {
    return {
      request: function(config) {
        var absUrl = "http://localhost:9090/template/" + config.url;
        config.url = absUrl;
        return config;
      }
    };
  }]);

  // $httpProvider.interceptors.push('GoogleTemplateUrlInterceptor');
}]);

cmGoogle.directive("app1RoomType", function() {
  var link = function(scope) {
    console.log("rt directive");
  };
  return {
    restrict: 'E',
    link: link,
    templateUrl: 'http://localhost:9090/templates/room-type.html.tpl'
  };
});


APP.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
  
  $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      'http://localhost:8080/**',
      'http://localhost:9090/**'
    ]);
    
  $routeProvider
  .when('/home', {
    templateUrl: 'http://localhost:9090/templates/home.html.tpl'
  });
}]);
