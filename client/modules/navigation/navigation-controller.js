myApp.controller("NavigationController", ['$scope', 'Menu', function($scope, Menu) {
    $scope.menus = [];
    $scope.footers = [{
        title: "Projects",
        links: [{
            title: "Research centers",
            url: "/underconstruction"
        },{
            title: "Audits",
            url: "/underconstruction"
        },{
            title: "Cyber security conferences",
            url: "/underconstruction"
        },{
            title: "Cyber forums",
            url: "/underconstruction"
        },]
    },{
        title: "Articles",
        links: [{
            title: "Annoucements",
            url: "/underconstruction"
        },{
            title: "News",
            url: "/underconstruction"
        },{
            title: "Media",
            url: "/underconstruction"
        },{
            title: "Messages",
            url: "/underconstruction"
        },]
    },{
        title: "Research centers",
        links: [{
            title: "Web security",
            url: "/underconstruction"
        },{
            title: "Network security",
            url: "/underconstruction"
        },{
            title: "IoT security",
            url: "/underconstruction"
        },{
            title: "Cyber security",
            url: "/underconstruction"
        },]
    },{
        title: "Courses",
        links: [{
            title: "Cyber security training",
            url: "/underconstruction"
        }]
    }]

    Menu.loadMenu().then(function(result) {
        $scope.menus = result;
    })


}])
