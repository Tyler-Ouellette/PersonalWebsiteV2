import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Logo from './logo';
import FooterLinks from './footer-links';
import '../style/carousel.less';

export default function() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        // Container with size #of elements % numColumns === 0 for even number of entries so no holes
        <div className="carousel">
            <div className="LogoWrapper">
                    <Logo />
            </div>
        </div>
        //Each Element will need a logo along with the name on hover. Along with pop up scale animation
    );
}
