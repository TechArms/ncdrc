myApp.controller("GalleryController", ['$scope', '$rootScope', '$routeParams', '$modal', 'Gallery', '$modalInstance',
    function($scope, $rootScope, $routeParams, $modalInstance, Gallery) {
        $scope.gallery = {};

        Gallery.loadGalleryById($rootScope.selectedGalleryId).then(function(result) {
            $scope.gallery = result;
        })

        $scope.cancel = function() {
            $modalInstance.close('cancel');
        };

    }
])
