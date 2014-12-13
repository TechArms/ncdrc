myApp.controller("ArticleListController", ['$scope','$rootScope', '$routeParams', '$location', 'Article', 
	function($scope, $rootScope, $routeParams, $location, Article) {
	var articleType = $routeParams.type;
	$rootScope.pageName = articleType.substring(0,1).toUpperCase() + articleType.substring(1, articleType.length);
	
	$scope.articleType = articleType;
	$scope.articleList = [];

	if(Article.types[$scope.articleType]) {
		Article.loadArticle(Article.types[$scope.articleType]).then(function(result) {
	        $scope.articleList = result;
	    }, function(error) {
	    	$location.path("/notfound")
	    });
	} else {
		$location.path("/notfound")
	}
}])