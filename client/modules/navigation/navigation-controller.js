myApp.controller("NavigationController", ['$scope', 'Menu', function($scope, Menu) {
    $scope.menus = [];
    $scope.footers = [{
        title: "Projects",
        links: [{
            title: "Research centers",
            url: "/researchlabs"
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
            url: "/articles/annoucements"
        },{
            title: "News",
            url: "/underconstruction"
        },{
            title: "Media",
            url: "/media"
        },{
            title: "Messages",
            url: "/underconstruction"
        },{
            title: "Gallery",
            url: "/gallerylist"
        }]
    },{
        title: "Research centers",
        links: [{
            title: "Web security",
            url: "/websecurity"
        },{
            title: "Network security",
            url: "/networksecurity"
        },{
            title: "IoT security",
            url: "/iotsecurity"
        },{
            title: "Cyber security",
            url: "/cybersecurity"
        },]
    },{
        title: "Courses",
        links: [{
            title: "Cyber security training",
            url: "/courses"
        }]
    }]

    Menu.loadMenu().then(function(result) {
        $scope.menus = result;
    })


}])
