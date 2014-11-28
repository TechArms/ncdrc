myApp.service("Carousel", ['DbService', '$q', function(DbService, $q) {
	this.carouselList = []; 

	this.loadCarousel = function() {
		var deferred = $q.defer();
		if(this.carouselList.length == 0) {
			DbService.loadCarousel().then(function(result) {
				deferred.resolve(result.data)	
			}.bind(this), function(error) {
			});
		} else {			
			deferred.resolve(this.carouselList);
		} 
		return deferred.promise;

	}

	this.loadCarousel();
}])