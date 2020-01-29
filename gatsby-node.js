const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `basepages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        {
            experience: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/experience/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            portfolio: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/portfolio/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            basepages: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/basepages/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            limitPost: site {
                siteMetadata {
                    experienceItemsPerPage
                    portfolioItemsPerPage
                }
            }
        }
    `).then(result => {
        const experiencePosts = result.data.experience.edges;

        const experiencePostsPerPage =
            result.data.limitPost.siteMetadata.experienceItemsPerPage;
        const numBlogPages = Math.ceil(
            experiencePosts.length / experiencePostsPerPage
        );

        Array.from({ length: numBlogPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/experience` : `/experience/${i + 1}`,
                component: path.resolve("./src/templates/experience-list.js"),
                context: {
                    limit: experiencePostsPerPage,
                    skip: i * experiencePostsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1
                }
            });
        });

        const PortfolioItems = result.data.portfolio.edges;
        const PortfolioItemsPerPage =
            result.data.limitPost.siteMetadata.portfolioItemsPerPage;
        const numPortfolioItems = Math.ceil(
            PortfolioItems.length / PortfolioItemsPerPage
        );

        Array.from({ length: numPortfolioItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
                component: path.resolve("./src/templates/portfolio-list.js"),
                context: {
                    limit: experiencePostsPerPage,
                    skip: i * experiencePostsPerPage,
                    numPages: numPortfolioItems,
                    currentPage: i + 1
                }
            });
        });

        result.data.experience.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "experience"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.portfolio.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "portfolio"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.basepages.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "basepage"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });
    });
};
