var myConfig = ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/login', {
            controller: "AuthenticationController",
            templateUrl: 'login.html'
        })
        .when('/home', {
            controller: "HomeController",
            templateUrl: '/modules/home/home.html'
        })
        .when('/articles/:type', {
            controller: "ArticleListController",
            templateUrl: '/modules/articles/article-list.html'
        })
        .when('/articles/:type/:id', {
            controller: "ArticleController",
            templateUrl: '/modules/articles/article.html'
        })
        .when('/websecurity', {
            templateUrl: '/modules/research-pages/web-security.html'
        })
        .when('/networksecurity', {
            templateUrl: '/modules/research-pages/network-security.html'
        })
        .when('/iotsecurity', {
            templateUrl: '/modules/research-pages/iot-security.html'
        })
        .when('/cybersecurity', {
            templateUrl: '/modules/research-pages/cyber-security.html'
        })
        .when('/aboutus', {
            controller: "AboutusController",
            templateUrl: '/modules/us/aboutus.html'
        })
        .when('/contactus', {
            controller: "AboutusController",
            templateUrl: '/modules/us/contactus.html'
        });
}]

var myRun = ['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
        if ($rootScope.isAuthenticated && $location.path() == "/") {
            $location.path('/home');
        }
    });
}]
var myApp = angular.module("myApp", ['ngRoute', 'ngSanitize','ui.bootstrap'])
    .config(myConfig)
    .run(myRun);



