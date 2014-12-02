module.exports = [
    {
        name: "Home",
        url: "/home",
        desc: "Main page of the application"
    },
    {
        name: "Projects",
        url: "#",
        desc: "Provides the research center dropdown menu",
        menu: [
            {
                name: "Research",
                url: "#",
                submenu: [
                    {
                        name: "Web Application Security",
                        url: "/websecurity",
                        desc: "Research centers that has web security base researches"
                    },
                    {
                        name: "Network Security",
                        url: "/networksecurity",
                        desc: "Research centers that has web security base researches"
                    },
                    {
                        name: "IOT Security",
                        url: "/iotsecurity",
                        desc: "Research centers that has web security base researches"
                    },
                    {
                        name: "Cyber Forensic Security",
                        url: "/cybersecurity",
                        desc: "Research centers that has web security base researches"
                    }
                ]
            }
        ]
    },
    {
        name: "About us",
        url: "#",
        desc: "About NCDRC",
        menu: [
            {
                name: "Organization profile",
                url: "/aboutus",
                desc: "About NCDRC"
            }
        ]
    },
    {
        name: "Contact us",
        url: "/contactus",
        desc: "Reach us"
       
    }
]