myApp.controller("ArticleListController", ['$scope', '$routeParams', 'Article', 
	function($scope, $routeParams, Article) {
	var articleType = $routeParams.type;
	$scope.pageName = articleType.substring(0,1).toUpperCase() + articleType.substring(1, articleType.length-1) + 's';
	
	$scope.articleType = articleType;
	$scope.articleList = [];

	if(Article.types[$scope.articleType]) {
		Article.loadArticle(Article.types[$scope.articleType]).then(function(result) {
	        $scope.articleList = result;
	    });
	}
}])