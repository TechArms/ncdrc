var myConfig = ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            controller: "HomeController",
            templateUrl: '/modules/home/home.html',
            data: {
                pageName: ""
            }
        })
        .when('/home', {
            controller: "HomeController",
            templateUrl: '/modules/home/home.html',
            data: {
                pageName: ""
            }
        })
        .when('/articles/:type', {
            controller: "ArticleListController",
            templateUrl: '/modules/articles/article-list.html',
            data: {
                pageName: ""
            }
        })
        .when('/articles/:type/:id', {
            controller: "ArticleController",
            templateUrl: '/modules/articles/article.html',
            data: {
                pageName: ""
            }
        })
        .when('/websecurity', {
            templateUrl: '/modules/research-pages/web-security.html',
            data: {
                pageName: "Web security lab"
            }
        })
        .when('/networksecurity', {
            templateUrl: '/modules/research-pages/network-security.html',
            data: {
                pageName: "Network security lab"
            }
        })
        .when('/iotsecurity', {
            templateUrl: '/modules/research-pages/iot-security.html',
            data: {
                pageName: "IoT security lab"
            }
        })
        .when('/cybersecurity', {
            templateUrl: '/modules/research-pages/cyber-security.html',
            data: {
                pageName: "Cyber security lab"
            }
        })
        .when('/aboutus', {
            controller: "AboutusController",
            templateUrl: '/modules/us/aboutus.html',
            data: {
                pageName: ""
            }
        })
        .when('/contactus', {
            controller: "AboutusController",
            templateUrl: '/modules/us/contactus.html',
            data: {
                pageName: ""
            }
        })
        .when('/gallerylist', {
            controller: "GalleryListController",
            templateUrl: '/modules/gallery/gallery-list.html',
            data: {
                pageName: ""
            }
        })
        .when('/underconstruction', {
            templateUrl: '/modules/exceptions/under-construction.html',
            data: {
                pageName: ""
            }
        })
        .otherwise({
            templateUrl: '/modules/exceptions/page-not-found.html',
            data: {
                pageName: ""
            }

        });
}]

var myRun = ['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
        if ($rootScope.isAuthenticated && $location.path() == "/") {
            $location.path('/home');
        }
    });
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        if (current.$$route.data.pageName)
            $rootScope.pageName = current.$$route.data.pageName;
        else
            $rootScope.pageName = ""
    });
}]
var myApp = angular.module("myApp", ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'pasvaz.bindonce'])
    .config(myConfig)
    .run(myRun);
