myApp.controller("HomeController", ['$scope', '$rootScope', '$location', 'Carousel', function($scope, $rootScope, $location, Carousel) {
    $scope.Carousels = [];
    $scope.myInterval = 5000;

    Carousel.loadCarousel().then(function(result) {
        $scope.Carousels = result;
    })
    // var slides = $scope.slides = [];
    // $scope.addSlide = function() {
    //     var newWidth = 600 + slides.length + 1;
    //     slides.push({
    //         image: 'http://placekitten.com/' + newWidth + '/300',
    //         text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    //     });
    // };
    // for (var i = 0; i < 4; i++) {
    //     $scope.addSlide();
    // }
}])
