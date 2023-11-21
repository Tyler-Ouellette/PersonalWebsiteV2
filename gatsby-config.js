let siteMetadata = {
    title: `Tyler Ouellette`,
    capitalizeTitleOnHome: true,
    logo: `/images/tLogo.png`,
    icon: `/images/tLogo.png`,
    titleImage: `/images/wall.jpg`,
    aboutImage: `/images/about.jpeg`,
    introTag: `SOLUTION'S ENGINEER / FULL STACK DEVELOPER`,
    description: `Never stop learning. `,
    author: `Tyler Ouellette`,
    experienceItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: 'HOME',
            url: '/',
        },
        {
            name: 'ABOUT',
            url: '/about',
        },
        {
            name: 'EXPERIENCE',
            url: '/experience',
        },
        {
            name: 'PORTFOLIO',
            url: '/portfolio',
        },
        {
            name: 'CONTACT',
            url: '/contact',
        },
    ],
    footerLinks: [
        {
            name: 'PRIVACY POLICY',
            url: '/privacy-policy',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/tyler-ouellette',
        },
    ],
    social: [
        {
            name: 'Github',
            icon: '/images/Github.svg',
            url: 'https://github.com/tyler-ouellette',
        },
        {
            name: 'Gmail',
            icon: '/images/gmail.svg',
            url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ouellette.tyler@hotmail.com',
        },
        // {
        //     name: "Instagram",
        //     icon: "/images/Instagram.svg",
        //     url: "#"
        // },
        // {
        //     name: "Youtube",
        //     icon: "/images/youtube.svg",
        //     url: "#"
        // },
        // {
        //     name: "Twitter",
        //     icon: "/images/twitter.svg",
        //     url: "#"
        // },
        // {
        //     name: "facebook",
        //     icon: "/images/facebook.svg",
        //     url: "#"
        // },
        {
            name: 'Resume',
            icon: '/images/resume.svg',
            url: '/images/Updated_Resume.pdf',
        },
        {
            name: 'LinkedIn',
            icon: '/images/linkedIn.svg',
            url: 'https://www.linkedin.com/in/tyler-ouellette14/',
        },
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: './test.json',
        description: `Please, feel free to contact me for job inquiries.`,
        mail: 'ouellette.tyler@hotmail.com',
        phone: '519 995-6808',
        address: 'From: Windsor, Ontario',
    },
    about: {
        image: '/static/9586108cb6231fd8aa812ccca7df7032/8c675/resumePhoto.jpg',
        html:
            "<p>I'm a graduate of the University of Windsor in Honours of Applied Computing for University Graduates program as well as a Bachelor's in Human Kinetics (Kinesiology) specializing in Movement Science. I had worked full-time in the field of Kinesiology for a year and realized I wanted a change. I've now fallen in love with computer science, web development and web security. I love to build things and learn new things. </p>\n<h6>Here are a few technologies I've been working with recently:",
    },
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-zeit-now',
            options: {
                globalHeaders: {
                    'referrer-policy': 'same-origin',
                    'feature-policy': "geolocation 'self'; microphone 'self'; camera 'self'",
                    'expect-ct': 'max-age=604800, enforce',
                    'strict-transport-security': 'max-age=31536000; includeSubDomains',
                    'x-frame-options': 'DENY',
                    'x-xss-protection': '1; mode=block',
                    'x-content-type-options': 'nosniff',
                    'x-download-options': 'noopen',
                },
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/assets/`,
            },
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true,
            },
        },
        `gatsby-plugin-netlify`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        // {
        //     resolve: `gatsby-plugin-dynatrace-dev`,
        //     options: {
        //         // include the Dynatrace JS Agent & enable tracking
        //         enabled: true,
        //         // your tenant id - part of the url e.g. https://YOUR_TENANT_ID.live.dynatrace.com
        //         tenantId: `hhx85665`,
        //         // the id of the application where the user actions should be tracked. Usually this will
        //         // be the ID of a manually created "Agentless real user monitoring" application
        //         applicationId: `APPLICATION-0DFA0DDB1BBCD935`,
        //         // Dynatrace API Token, can be retrieve from Settings => Integration => Dynatrace API
        //         apiToken: `BBpcsMDwTWibqESccIk_T`,
        //         /*
        //          * How the JavaScript Agent should be embedded into the page
        //          * Available Modes:
        //          *  0 - One Agent JavaScript Tag => NOTE: Do NOT use, does not work currently
        //          *  1 - Asynchronous Code Snippet (~18KB)
        //          *  2 - Synchronous Code Snippet (~18KB)
        //          *  3 - Whole agent code inline (~120KB)
        //          */
        //         mode: 1,
        //     },
        // },
    ],
};
