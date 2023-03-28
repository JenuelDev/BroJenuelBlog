const GithubIcon = "uil:github-alt";
const ExternalLink = "octicon:link-external-16";
const Html5 = "ri:html5-fill";
const NodeJsIcon = "teenyicons:nodejs-solid";
const VueJsIcon = "akar-icons:vue-fill";
const SocketIoIcon = "cib:socket-io";
const VuetifyIcon = "simple-icons:vuetify";
const javaScriptIcon = "teenyicons:javascript-solid";
const CssIcon = "teenyicons:css3-solid";
const CloutDownloadIcon = "material-symbols:cloud-download";
const reactIcon = "tabler:brand-react-native";

export const useCodeChallenges = () => {
    return [
        {
            title: "Random Name Selector",
            des: "<p>This is a simple name random name/item selector.</p>",
            headIcon: "chat",
            links: [
                {
                    link: "https://github.com/BroJenuel/random-name-select",
                    icon: GithubIcon,
                    tooltip: "Open In Github",
                },
                {
                    link: "https://random-select.brojenuel.com",
                    icon: ExternalLink,
                    tooltip: "Open Link",
                },
            ],
            techs: [
                {
                    name: "html&css",
                    icon: Html5,
                },
                {
                    name: "express",
                    icon: NodeJsIcon,
                },
                {
                    name: "VueJS",
                    icon: VueJsIcon,
                },
            ],
        },
        {
            title: "Lets Chat",
            des: "<p>Lets Chat is a web app that I made where a user can chat with another person or more than one person, depending on the room selected.</p>",
            headIcon: "chat",
            links: [
                {
                    link: "https://github.com/BroJenuel-Youtube/lets-chat",
                    icon: GithubIcon,
                    tooltip: "Open In Github",
                },
                {
                    link: "https://lets-chat-b6w7.onrender.com/",
                    icon: ExternalLink,
                    tooltip: "Open Link",
                },
            ],
            techs: [
                {
                    name: "html&css",
                    icon: Html5,
                },
                {
                    name: "express",
                    icon: NodeJsIcon,
                },
                {
                    name: "socket.io",
                    icon: SocketIoIcon,
                },
            ],
        },
        {
            title: "Portfolio",
            des: "<p>It's is a portfolio made with vue mixed with a plugin called vuetify. It is a free open source project that you can use for your portfolio project as well.</p>",
            headIcon: "chat",
            links: [
                {
                    link: "https://i.ibb.co/wr4b0BD/portfoliov1-min.png",
                    icon: GithubIcon,
                    tooltip: "Open in Github",
                },
                {
                    link: "https://versionone.jenuelganawed.com",
                    icon: ExternalLink,
                    tooltip: "Open Link",
                },
            ],
            techs: [
                {
                    name: "vue",
                    icon: VueJsIcon,
                },
                {
                    name: "vuetify",
                    icon: VuetifyIcon,
                },
            ],
        },
        {
            title: "Speech To Text",
            des: "<p>This is a simple speech to text website using HTML, CSS, and JS. JavaScript is fascinating in what it can do. So, I built a simple project to try to convert speech to text.</p>",
            links: [
                {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/speach-to-text",
                    icon: GithubIcon,
                    tooltip: "Open in Github",
                },
                {
                    link: "https://speach-to-text.jenuelganawed.com",
                    icon: ExternalLink,
                    tooltip: "Open Link",
                },
            ],
            techs: [
                {
                    name: "html",
                    icon: Html5,
                },
                {
                    name: "javaScript",
                    icon: javaScriptIcon,
                },
                {
                    name: "css",
                    icon: CssIcon,
                },
            ],
        },
        {
            title: "Text To Speech",
            des: "<p>This is a simple Text to Speech using HTML, CSS, and JS. JavaScript is fascinating with what it can do. So I made a simple, project to try and convert speech to text. I used a library called Speech Recognition.</p>",
            links: [
                {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/text-to-speach",
                    icon: GithubIcon,
                    tooltip: "Open in Github",
                },
                {
                    link: "https://text-to-speach.jenuelganawed.com",
                    icon: ExternalLink,
                    tooltip: "Open Link",
                },
            ],
            techs: [
                {
                    name: "html",
                    icon: Html5,
                },
                {
                    name: "javaScript",
                    icon: javaScriptIcon,
                },
                {
                    name: "css",
                    icon: CssIcon,
                },
            ],
        },
        {
            title: "Web Calculator",
            des: "<p>Calculator is a fascinating computer. People Have been using it for computing a lot of stuff. It's been a useful tool for everyone. So I created my simple calculator using Vue.</p>",
            links: [
                {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/calculator-vue",
                    icon: GithubIcon,
                    tooltip: "Open In Github",
                },
                {
                    link: "https://calculator.jenuelganawed.com",
                    icon: ExternalLink,
                    tooltip: "Open Link",
                },
            ],
            techs: [
                {
                    name: "vue.js",
                    icon: VueJsIcon,
                },
            ],
        },
        {
            title: "World Time Using React Native",
            des: "<p>World time is an app I created, wherein you can check the time around the world and also check if its night time or day time.</p>",
            links: [
                {
                    link: "https://github.com/BroJenuel/MyPortFolio/tree/master/appDev/world_time",
                    icon: GithubIcon,
                    tooltip: "Open in Github",
                },
                {
                    link: "https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view",
                    icon: CloutDownloadIcon,
                    tooltip: "Download The APP",
                },
            ],
            techs: [
                {
                    icon: reactIcon,
                    name: "react-native",
                },
                {
                    icon: javaScriptIcon,
                    name: "javaScript",
                },
            ],
        },
    ];
};
