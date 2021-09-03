var Config = {
    title: "Machine Learning Seminars",
    url: "https://github.com/andriygav/MachineLearningSeminars",
    navigation: [
        {
            label: "Home",
            link: "index.md",
            type: "static"
        },
        {
            label: "First part",
            navigation: [
                {
                    label: "sem1",
                    link: "sem1.html",
                    github: "https://github.com/andriygav/MachineLearningSeminars/blob/master/sem1/main.ipynb",
                    binder: "https://mybinder.org/v2/gh/andriygav/MachineLearningSeminars/master?filepath=sem1/main.ipynb"
                }
            ]
        },
        {
            label: "Presentations",
            navigation: [
                {
                    label: "sem1",
                    link: "sem1.slides.html"
                }
            ]
        },
        {
            label: "Exercises",
            navigation: []
        },
        {
            label: "About",
            link: "about.md",
            type: "static"
        }
    ]
};