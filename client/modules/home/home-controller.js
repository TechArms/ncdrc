myApp.controller("HomeController", ['$scope', 'Carousel', 'Article', function($scope, Carousel, Article) {
    $scope.Carousels = [];
    $scope.annoucements = [];
    $scope.myInterval = 5000;

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
