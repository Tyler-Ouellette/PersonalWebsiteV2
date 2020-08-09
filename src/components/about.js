import React from 'react';
import SectionTitle from './sectiontitle';
import { StaticQuery, graphql } from 'gatsby';
import '../style/contact.less';
import Img from 'gatsby-image';
import MyTech from './MyTech';

class About extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="section-title">
                    <SectionTitle title="ABOUT ME" />
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
                                <MyTech />
                            </div>
                        </article>
                    </div>
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
            }
        `}
        render={data => <About about={data.site.siteMetadata.about} file={data.file} />}
    />
);
