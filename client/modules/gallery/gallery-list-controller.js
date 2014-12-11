myApp.controller("GalleryListController", ['$scope', '$rootScope', '$routeParams', '$modal', 'Gallery',
    function($scope, $rootScope, $routeParams, $modal, Gallery) {
        $scope.galleryList = [];
        // $scope.selectedGallery = {};

        Gallery.loadGalleries().then(function(result) {
            $scope.galleryList = result;
        })

        $scope.selectGallery = function(id) {
            $rootScope.selectedGalleryId =id;
            var modalInstance = $modal.open({
                backdrop: true,
                keyboard: true,
                backdropClick: true,
                templateUrl: '/modules/gallery/gallery.html',
                controller: 'GalleryController',
                // resolve: {
                //     galleryId: function() {
                //         return id;
                //     }
                // }
                // scope: {
                //     id: id
                // }
            })

        }
    }
])
