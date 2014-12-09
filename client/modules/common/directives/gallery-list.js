myApp.directive('galleryList', ['$parse', function($parse) {
    return {
        restrict: 'A',
        scope: {
            galleryList: '=',
            limitTo: '=',
            selectGallery: '='
        },
        templateUrl: '/modules/common/directives/gallery-list.html'
    };
}]);
