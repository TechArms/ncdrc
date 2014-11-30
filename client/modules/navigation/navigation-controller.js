myApp.controller("NavigationController", ['$scope', 'Menu', function($scope, Menu) {
	$scope.menus = [];

	Menu.loadMenu().then(function(result) {
        $scope.menus = result;
    })
}])