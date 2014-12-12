myApp.controller("ArticleController", ['$scope', '$routeParams', 'Article', 
	function($scope, $routeParams, Article) {
	var articleType = $routeParams.type;
	$scope.pageName = articleType.substring(0,1).toUpperCase() + articleType.substring(1, articleType.length-1);
	$scope.articleType = articleType;
	$scope.articleId = $routeParams.id;
	$scope.article = {};

	if(Article.types[$scope.articleType]) {
		Article.loadArticleById(Article.types[$scope.articleType], $scope.articleId).then(function(result) {
	        $scope.article = result;
	    });
	}
}])