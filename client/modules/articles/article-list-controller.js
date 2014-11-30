myApp.controller("ArticleListController", ['$scope', '$routeParams', 'Article', 
	function($scope, $routeParams, Article) {

	$scope.articleType = $routeParams.type;
	$scope.articleList = [];

	if(Article.types[$scope.articleType]) {
		Article.loadArticle(Article.types[$scope.articleType]).then(function(result) {
	        $scope.articleList = result;
	    });
	}
}])