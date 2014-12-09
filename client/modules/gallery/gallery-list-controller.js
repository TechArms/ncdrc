myApp.controller("GalleryListController", ['$scope', '$routeParams', 'Gallery',
    function($scope, $routeParams, Gallery) {
        $scope.galleryList = [];
        $scope.selectedGallery = {};

        Gallery.loadGalleries().then(function(result) {
            $scope.galleryList = result;
        })

        $scope.selectGallery = function(id) {
        	Gallery.loadGalleryById(id).then(function(result) {
	            $scope.selectedGallery = result;
	        })
        }

    }
])
