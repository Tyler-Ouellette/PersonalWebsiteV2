let siteMetadata = {
    title: `Tyler Ouellette`,
    capitalizeTitleOnHome: true,
    logo: `/images/tLogo.png`,
    icon: `/images/tLogo.png`,
    titleImage: `/images/wall.jpg`,
    aboutImage: `/images/about.jpeg`,
    introTag: `JUNIOR FULL STACK DEVELOPER`,
    description: `Never stop learning. `,
    author: `Tyler Ouellette`,
    experienceItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "EXPERIENCE",
            url: "/experience"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/tyler-ouellette"
        }
    ],
    social: [
        {
            name: "Github",
            icon: "/images/Github.svg",
            url: "https://github.com/tyler-ouellette"
        },
        {
            name: "Gmail",
            icon: "/images/gmail.svg",
            url:
                "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ouellette.tyler@hotmail.com"
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
            name: "Resume",
            icon: "/images/resume.svg",
            url: "/images/Updated_Resume.pdf"
        },
        {
            name: "LinkedIn",
            icon: "/images/linkedIn.svg",
            url: "https://www.linkedin.com/in/tyler-ouellette14/"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Please, feel free to contact me for job inquiries.`,
        mail: "ouellette.tyler@hotmail.com",
        phone: "519 995-6808",
        address: "From: Windsor, Ontario"
    },
    about: {
        image: "/static/9586108cb6231fd8aa812ccca7df7032/8c675/resumePhoto.jpg",
        html:
            "<p>I'm a student at the University of Windsor in Honours of Applied Computing for University Graduates program and I will graduate May 2020. I currently have a degree in Human Kinetics (Kinesiology) specializing in Movement Science. I had worked full-time in the field for a year and realized I wanted a change. I've now fallen in love with computer science, web development and security. I love to build things and learn new things. I want to eventually get my security+, CISSP, GPEN certificates and work as a penetration tester.</p>\n<h6>Here are a few technologies I've been working with recently:</h6>\n<ul>\n<li>HTML &#x26; CSS</li>\n<li>Javascript (ES6+)</li>\n<li>React</li>\n<li>Node</li>\n<li>Express</li>\n<li>Gatsby</li>\n<li>GraphQL</li>\n<li>Vue</li><li>PHP</li>\n</ul>"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-zeit-now",
            options: {
                globalHeaders: {
                    "referrer-policy": "same-origin",
                    "feature-policy":
                        "geolocation 'self'; microphone 'self'; camera 'self'",
                    "expect-ct": "max-age=604800, enforce",
                    "strict-transport-security":
                        "max-age=31536000; includeSubDomains",
                    "x-frame-options": "DENY",
                    "x-xss-protection": "1; mode=block",
                    "x-content-type-options": "nosniff",
                    "x-download-options": "noopen"
                }
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
