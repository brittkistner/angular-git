var gitlab = angular.module('gitlab', ['ngRoute']);

gitlab.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/static/js/views/home.html',
            controller: homeController
        }).
        when('/repos/:owner/:repo', {
            templateUrl: '/static/js/views/repo.html',
            controller: repoController
        }).
        otherwise({redirectTo:'/'})
}]);