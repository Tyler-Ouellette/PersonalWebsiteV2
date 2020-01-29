let siteMetadata = {
    title: `Tyler Ouellette`,
    capitalizeTitleOnHome: true,
    logo: `/images/tLogo.png`,
    icon: `/images/tLogo.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `JUNIOR FULL STACK DEVELOPER`,
    description: `Never stop learning. `,
    author: `Tyler Ouellette`,
    blogItemsPerPage: 10,
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
            url: "/blog"
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
            url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ouellette.tyler@hotmail.com"
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
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
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
