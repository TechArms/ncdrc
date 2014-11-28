var myConfig = ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/login', {
            controller: "AuthenticationController",
            templateUrl: 'login.html'
        })
        .when('/home', {
            controller: "HomeController",
            templateUrl: 'modules/home/home.html'
        })
        .when('/articles', {
            controller: "ArticleListController",
            templateUrl: 'modules/articles/article-list.html'
        });
}]

var myRun = ['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
        if ($rootScope.isAuthenticated && $location.path() == "/") {
            $location.path('/home');
        }
    });
}]
var myApp = angular.module("myApp", ['ngRoute', 'ui.bootstrap'])
    .config(myConfig)
    .run(myRun);



