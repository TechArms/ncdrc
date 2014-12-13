myApp.controller("ArticleController", ['$scope', '$rootScope', '$routeParams', '$location', 'Article', 
	function($scope, $rootScope, $routeParams, $location, Article) {
	var articleType = $routeParams.type;
	$rootScope.pageName = articleType.substring(0,1).toUpperCase() + articleType.substring(1, articleType.length-1);
	$scope.articleType = articleType;
	$scope.articleId = $routeParams.id;
	$scope.article = {};

	if(Article.types[$scope.articleType]) {
		Article.loadArticleById(Article.types[$scope.articleType], $scope.articleId).then(function(result) {
	        $scope.article = result;
	    }, function(error) {
	    	$location.path("/notfound")
	    });
	}
}])