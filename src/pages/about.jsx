import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import Hero from "../components/modules/Hero";
import Einar6 from "../posts/img/Einar6.jpg";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="about flex center column">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero id="aboutPage" src={postEdges[0].node.frontmatter.thumbnail.childImageSharp.responsiveSizes.src} bgpos="50% 20%" headerSize="1.5"/>
        <About postEdges={postEdges}/>
      </div>
    );
  }
}
export default AboutPage;
export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "about"} } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          timeToRead
          html
          frontmatter {
            title
            category
            thumbnail {
              childImageSharp {
                responsiveSizes(maxWidth: 1920, quality: 75, cropFocus: CENTER, toFormat: JPG) {
                  src
                  srcSet
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`
