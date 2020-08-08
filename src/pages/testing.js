import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Docker from './../../assets/docker.svg';
import Gatsby from './../../assets/gatsby.svg';
import Jenkins from './../../assets/jenkins.svg';
import Kubernetes from './../../assets/kubernetes.svg';
import Laravel from './../../assets/laravel.svg';
import Mongodb from './../../assets/mongodb.svg';
import Nodejs from './../../assets/nodejs.svg';
import Php from './../../assets/php.svg';
import Vue from './../../assets/vue.svg';
import Css from './../../assets/css.svg';
import '../style/testing.less';
// export const squareImage = graphql`
//     fragment squareImage on File {
//         childImageSharp {
//             fluid(maxWidth: 200, maxHeight: 200) {
//                 ...GatsbyImageSharpFluid
//             }
//         }
//     }
// `;

// export const query = graphql`
//     query {
//         cssLogo: file(absolutePath: { eq: "/static/images/css.svg" }) {
//             ...squareImage
//         }

//         docker: file(relativePath: { eq: "images/docker.svg" }) {
//             ...squareImage
//         }

//         gatsby: file(relativePath: { eq: "images/gatsby.svg" }) {
//             ...squareImage
//         }
//         site {
//             siteMetadata {
//                 logos {
//                     name
//                     logo
//                 }
//             }
//         }
//     }
// `;

// export const query = graphql`
//     query {
//         site {
//             siteMetadata {
//                 logos {
//                     name
//                     logo
//                 }
//             }
//         }
//     }
// `;

// export default ({ data }) => {
//     const items = data.site.siteMetadata.logos;
//     let list = [];
//     items.forEach(function(e, i) {
//         list.push(<ListItem key={e.url + '-' + e.logo + '-' + i} data={e} />);
//     });

//     console.log(items);
//     console.log(query);

//     return (
//         <div className="div">
//             <div className="container">
//                 <div className="logo">
//                     <img src={data.cssLogo} alt={items.name}></img>
//                     <img src={`/static/images/gatsby.svg`} alt={items.name}></img>
//                     {list}
//                     {/* {logos.map(logo => (
//                         <ul className="social-links">{list}</ul>
//                     ))} */}
//                 </div>
//             </div>
//         </div>
//     );
// };
export default props => {
    const data = useStaticQuery(graphql`
        query {
            # svg {
            #     content # SVG content optimized with SVGO
            #     originalContent # Original SVG content
            #     dataURI # Optimized SVG as compact dataURI
            #     absolutePath #
            #     relativePath #
            # }
            # file {
            #     url
            #     fileName
            #     details {
            #         image {
            #             width
            #             height
            #         }
            #     }
            # }
            site {
                siteMetadata {
                    logos {
                        name
                        logo
                    }
                }
            }
            allFile(filter: { relativeDirectory: { eq: "assets" } }) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid {
                                base64
                                tracedSVG
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                                originalImg
                                originalName
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
            }
        }
    `);

    // const numTech = this.query.logos.length();
    // for (numColumns = 0; numColumns < numTech; numColumns++) {
    //     if (numTech % numColumns !== 0) {
    //         numColumns++;
    //     } else {
    //         break;
    //         // grid-template-columns: repeat(increment, minmax(100px, 1fr));
    //     }
    // }

    return (
        <div className="myTech">
            <Css />
            <Docker />
            <Gatsby />
            <Jenkins />
            <Kubernetes />
            <Laravel />
            <Mongodb />
            <Nodejs />
            <Php />
            <Vue />
            {data.allFile.edges.map(image => (
                <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('.')[0]} // only use section of the file extension with the filename
                />
            ))}
        </div>
    );
};
