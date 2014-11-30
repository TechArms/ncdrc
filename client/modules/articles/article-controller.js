myApp.controller("ArticleController", ['$scope', '$routeParams', 'Article', 
	function($scope, $routeParams, Article) {

	$scope.articleType = $routeParams.type;
	$scope.articleId = $routeParams.id;
	$scope.article = {};

	if(Article.types[$scope.articleType]) {
		Article.loadArticleById(Article.types[$scope.articleType], $scope.articleId).then(function(result) {
	        $scope.article = result;
	    });
	}
}])