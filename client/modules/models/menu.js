myApp.service("Menu", ['DbService', '$q', function(DbService, $q) {
	this.menu = []; 

	this.loadMenu = function() {
		var deferred = $q.defer();
		if(this.menu.length == 0) {
			DbService.loadMenu().then(function(result) {
				deferred.resolve(result.data)	
			}.bind(this), function(error) {
			});
		} else {			
			deferred.resolve(this.menu);
		} 
		return deferred.promise;

	}

	this.loadMenu();
}])