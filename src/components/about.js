import React from 'react';
import SectionTitle from './sectiontitle';
import { StaticQuery, graphql } from 'gatsby';
import '../style/contact.less';
import Img from 'gatsby-image';

class About extends React.Component {
    render() {
        return (
            <section className="container" id="about">
                <div className="section-title">
                    <SectionTitle title="ABOUT ME" />
                </div>
                <div className="container">
                    <article className="post">
                        <div className="content row flex">
                            <div className="center">
                                <div className="img">
                                    <Img
                                        fluid={this.props.file.childImageSharp.fluid}
                                        style={{
                                            'border-radius': '50%',
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                className="col s12 m11 l10"
                                dangerouslySetInnerHTML={{
                                    __html: this.props.about.html,
                                }}></div>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            {
                file(relativePath: { regex: "/resume/" }) {
                    childImageSharp {
                        fluid {
                            sizes
                            tracedSVG
                            srcWebp
                            srcSetWebp
                            src
                            srcSet
                            aspectRatio
                            base64
                        }
                    }
                }
                site {
                    siteMetadata {
                        about {
                            html
                            image
                        }
                        title
                        capitalizeTitleOnHome
                        titleImage
                        aboutImage
                        introTag
                        description
                    }
                }
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
        `}
        render={data => <About about={data.site.siteMetadata.about} file={data.file} />}
    />
);
