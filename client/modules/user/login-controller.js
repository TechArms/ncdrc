myApp.controller("UsersController", ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    // $rootScope.isAuthenticating = false;
    $scope.logout = function() {
        $rootScope.isAuthenticated = false;
        $location.path('/');
    }
}])

myApp.controller("AuthenticationController", ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $scope.submitCustomerLogin = function() {
        $scope.word = /^\s*\w*\s*$/;
        if ($scope.userid.length && $scope.password.length) {
            $location.path('/home');
            $rootScope.isAuthenticated = true;
        }
    }
}])
