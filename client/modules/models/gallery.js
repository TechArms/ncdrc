myApp.service("Gallery", ['DbService', '$q', function(DbService, $q) {
	this.galleries = []; 
	

	this.loadGalleries = function(type) {
		var deferred = $q.defer();
		
		if(this.galleries.length == 0) {
			DbService.loadGalleries().then(function(result) {
				this.galleries = result.data;
				deferred.resolve(result.data)	
			}.bind(this), function(error) {
			});
		} else {		
			deferred.resolve(this.galleries);

		} 
			
		return deferred.promise;
	}

	this.loadGalleryById = function(id) {
		var deferred = $q.defer();
		if(isNaN(id)) {
			deferred.resolve({})	
		} else {
			DbService.loadGalleryById(id).then(function(result) {
				deferred.resolve(result.data)	
			}.bind(this), function(error) {
			});
		}
		return deferred.promise;
		
	}
}])