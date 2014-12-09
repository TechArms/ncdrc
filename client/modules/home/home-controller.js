myApp.controller("HomeController", ['$scope', 'Carousel', 'Article', 'Gallery', 
    function($scope, Carousel, Article, Gallery) {
    $scope.Carousels = [];
    $scope.annoucements = [];
    $scope.myInterval = 5000;
    $scope.galleryList = [];

    Gallery.loadGalleries().then(function(result) {
        $scope.galleryList = result;
    })
    Carousel.loadCarousel().then(function(result) {
        $scope.Carousels = result;
    });

    Article.loadArticle(Article.types.annoucements).then(function(result) {
        $scope.annoucements = result;
    });

    Article.loadArticle(Article.types.messages).then(function(result) {
        $scope.messages = result;
    });
    $scope.oneAtATime = true;




}])
