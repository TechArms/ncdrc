myApp.controller("GalleryController", ['$scope', '$rootScope', '$routeParams', '$modalInstance', 'Gallery',
    function($scope, $rootScope, $routeParams, $modalInstance, Gallery) {
        $scope.gallery = {};

        Gallery.loadGalleryById($rootScope.selectedGalleryId).then(function(result) {
            $scope.gallery = result;
        })

        $scope.cancel = function() {
        	// alert($modalInstance)
            $modalInstance.close('cancel');
        };

    }
])
