myApp.service("Article", ['DbService', '$q', function(DbService, $q) {
	this.news = []; 
	this.annoucements = []; 
	this.messages = []; 
	this.types = {
		news: "news",
		annoucements: "annoucements",
		messages: "messages"
	}

	this.loadArticle = function(type) {
		var deferred = $q.defer();
		if(!this[type]) {
			deferred.reject(new Error("Not found"))	
		} else {
			if(this[type].length == 0) {
				DbService.loadArticles(type).then(function(result) {
					this[type] = result.data;
					deferred.resolve(result.data)	
				}.bind(this), function(error) {
					deferred.reject(error);
				});
			} else {		
					deferred.resolve(this[type]);

			} 
		}		
		return deferred.promise;
	}

	this.loadArticleById = function(type, id) {
		var deferred = $q.defer();
		if(!this[type] || isNaN(id)) {
			deferred.resolve({})	
		} else {
			DbService.loadArticleById(type, id).then(function(result) {
				deferred.resolve(result.data)	
			}.bind(this), function(error) {
				deferred.reject(error)
			});
		}
		return deferred.promise;
		
	}

	// this.loadArticle();
}])