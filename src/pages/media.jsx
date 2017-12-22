import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Hero from "../components/modules/Hero";
import Einar16 from "../posts/img/Einar16.jpg";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Media extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="mediaView">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Hero id="mediaID" src={this.props.data.file.childImageSharp.sizes} height="600" position="50% 0"/>
        <PostListing postEdges={postEdges} view="mediaView"/>
      </div>
    );
  }
}

export default Media;
/* eslint no-undef: "off"*/
export const mediaQuery = graphql`
  query MediaPages {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___position], order: ASC }
      filter: { frontmatter: { category: { eq: "media"} } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            medialink
            title
            description
            position
          }
        }
      }
    }
    file(relativePath: { regex: "/Einar16/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1920, maxHeight: 1100, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
