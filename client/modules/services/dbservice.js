myApp.service('DbService', ['$http', function($http) {
	var getArticleType = function(type) {
		var articleType = ""
		switch(type) {
			case "news":
				articleType = "news";
				break;
			case "annoucements":
				articleType = "annoucements";
				break;
			case "messages":
				articleType = "messages";
				break;
		}
		return articleType;
	}
	this.loadMenu = function() {
		return $http.get('/menu');
	}
	this.loadCarousel = function() {
		return $http.get('/homecarousels');
	}
	this.loadArticles = function(type) {		
		return $http.get('/article/'+getArticleType(type));
	}
	this.loadArticleById = function(type, id) {
		return $http.get('/article/'+getArticleType(type)+'/'+id);
	}
	this.loadGalleries = function() {		
		return $http.get('/galleries/');
	}
	this.loadGalleryById = function(id) {
		return $http.get('/galleries/'+id);
	}
}])