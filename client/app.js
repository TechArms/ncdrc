var myConfig = ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            controller: "HomeController",
            templateUrl: '/modules/home/home.html',
            data: {pageName: ""}
        })
        .when('/home', {
            controller: "HomeController",
            templateUrl: '/modules/home/home.html',
            data: {pageName: ""}
        })
        .when('/articles/:type', {
            controller: "ArticleListController",
            templateUrl: '/modules/articles/article-list.html',
            data: {pageName: ""}
        })
        .when('/articles/:type/:id', {
            controller: "ArticleController",
            templateUrl: '/modules/articles/article.html',
            data: {pageName: ""}
        })
        .when('/websecurity', {
            templateUrl: '/modules/research-pages/web-security.html',
            data: {pageName: "Web security"}
        })
        .when('/networksecurity', {
            templateUrl: '/modules/research-pages/network-security.html',
            data: {pageName: ""}
        })
        .when('/iotsecurity', {
            templateUrl: '/modules/research-pages/iot-security.html',
            data: {pageName: ""}
        })
        .when('/cybersecurity', {
            templateUrl: '/modules/research-pages/cyber-security.html',
            data: {pageName: ""}
        })
        .when('/aboutus', {
            controller: "AboutusController",
            templateUrl: '/modules/us/aboutus.html',
            data: {pageName: ""}
        })
        .when('/contactus', {
            controller: "AboutusController",
            templateUrl: '/modules/us/contactus.html',
            data: {pageName: ""}
        });
}]

var myRun = ['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
        if ($rootScope.isAuthenticated && $location.path() == "/") {
            $location.path('/home');
        }
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.pageName = current.$$route.data.pageName;
    });
}]
var myApp = angular.module("myApp", ['ngRoute', 'ngSanitize','ui.bootstrap', 'pasvaz.bindonce'])
    .config(myConfig)
    .run(myRun);

    