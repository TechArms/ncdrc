myApp.service('DbService', ['$http', function($http) {
	this.loadCarousel = function() {
		return $http.get('/homecarousels');
	}
}])