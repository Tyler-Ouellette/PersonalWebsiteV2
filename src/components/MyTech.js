import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Aws from './../../assets/aws.svg';
import Css from './../../assets/css.svg';
import Docker from './../../assets/docker.svg';
import Gatsby from './../../assets/gatsby.svg';
import GraphqlLogo from './../../assets/graphqlLogo.svg';
import Html from './../../assets/html.svg';
import Jenkins from './../../assets/jenkins.svg';
import JsLogo from './../../assets/jsLogo.svg';
import Kubernetes from './../../assets/kubernetes.svg';
import Laravel from './../../assets/laravel.svg';
import Mongodb from './../../assets/mongodb.svg';
import Nodejs from './../../assets/nodejs.svg';
import ReactLogo from './../../assets/reactLogo.svg';
import Php from './../../assets/php.svg';
import Vue from './../../assets/vue.svg';
import '../style/myTech.less';

const MyTech = () => {
    return (
        <div className="myTech">
            <Aws />
            <Css />
            <Docker />
            <Gatsby />
            <GraphqlLogo />
            <p>AWS</p>
            <p>CSS</p>
            <p>Docker</p>
            <p>Gatsby</p>
            <p>GraphQL</p>
            <Html />
            <Jenkins />
            <JsLogo />
            <Kubernetes />
            <Laravel />
            <p>JavaScript</p>
            <p>HTML5</p>
            <p>Jenkins</p>
            <p>Kubernetes</p>
            <p>Laravel</p>
            <Mongodb />
            <Nodejs />
            <Php />
            <ReactLogo />
            <Vue />
            <p>MongoDB</p>
            <p>NodeJS</p>
            <p>PHP</p>
            <p>React</p>
            <p>Vue</p>
            {/* {data.allFile.edges.map(image => (
                <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('.')[0]} // only use section of the file extension with the filename
                />
            ))} */}
        </div>
    );
};

export default MyTech;

// export default props => {
//     const data = useStaticQuery(graphql`
//         query {
//             site {
//                 siteMetadata {
//                     logos {
//                         name
//                         logo
//                     }
//                 }
//             }
//         }
//     `);

// const numTech = this.query.logos.length();
// for (numColumns = 0; numColumns < numTech; numColumns++) {
//     if (numTech % numColumns !== 0) {
//         numColumns++;
//     } else {
//         break;
//         // grid-template-columns: repeat(increment, minmax(100px, 1fr));
//     }
// }

// };
