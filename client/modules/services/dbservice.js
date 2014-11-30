myApp.service('DbService', ['$http', function($http) {
	this.loadMenu = function() {
		return $http.get('/menu');
	}
	this.loadCarousel = function() {
		return $http.get('/homecarousels');
	}
	this.loadArticles = function(type) {
		var articleType = ""
		switch(type) {
			case "newsList":
				articleType = "news";
				break;
			case "annoucementList":
				articleType = "annoucements";
				break;
		}
		return $http.get('/article/'+articleType);
	}
	this.loadArticleById = function(type, id) {
		var articleType = ""
		switch(type) {
			case "newsList":
				articleType = "news";
				break;
			case "annoucementList":
				articleType = "annoucements";
				break;
		}
		return $http.get('/article/'+articleType+'/'+id);
	}
}])