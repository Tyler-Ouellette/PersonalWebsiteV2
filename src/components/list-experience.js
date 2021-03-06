import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ExperienceItems from "./items-experience";
import SectionTitle from "./sectiontitle";

export default function() {
    const query = useStaticQuery(graphql`
        query experienceList {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/experience/" } }
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
                            date
                            image {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 1920) {
                                        srcSet
                                        ...GatsbyImageSharpFluid
                                    }
                                    id
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (query.allMarkdownRemark.edges.length > 0) {
        return (
            <section id="experience" className="container">
                <div className="section-title">
                    <SectionTitle title="EXPERIENCE" />
                </div>
                <ExperienceItems data={query} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
