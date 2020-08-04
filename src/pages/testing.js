import React from 'react';
import { graphql } from 'gatsby';

function ListItem(props) {
    const data = props.data;
    return (
        <li>
            <div>
                <img src={data.logo} alt={data.name} />
            </div>
        </li>
    );
}

export const squareImage = graphql`
    fragment squareImage on File {
        childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

// export const imagequery = graphql`
//     query {
//         image1: file(relativePath: { eq: "/images/image1.jpg" }) {
//             ...squareImage
//         }

//         image2: file(relativePath: { eq: "images/image2.jpg" }) {
//             ...squareImage
//         }

//         image3: file(relativePath: { eq: "images/image3.jpg" }) {
//             ...squareImage
//         }
//     }
// `;

export const query = graphql`
    query {
        site {
            siteMetadata {
                logos {
                    name
                    logo
                }
            }
        }
    }
`;

export default ({ data }) => {
    const items = data.site.siteMetadata.logos;
    let list = [];
    items.forEach(function(e, i) {
        list.push(<ListItem key={e.url + '-' + e.logo + '-' + i} data={e} />);
    });

    console.log(items);
    console.log(query);

    return (
        <div className="div">
            <div className="container">
                <div className="logo">
                    <img src={items.logo} alt={items.name}></img>
                    <img src={`/static/images/gatsby.svg`} alt={items.name}></img>
                    {list}
                    {/* {logos.map(logo => (
                        <ul className="social-links">{list}</ul>
                    ))} */}
                </div>
            </div>
        </div>
    );
};
