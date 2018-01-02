import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Hero from "../components/modules/Hero";
import Einar from "../posts/img/Einar7.jpg";
import PostListing from "../components/PostListing/PostListing";
import FadeInWrapper from "../components/modules/FadeInWrapper";
import SalesPitch from "../components/modules/SalesPitch";
import Header from '../components/modules/Header';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} pageImg={Einar} />
        <Hero id="indexID" src={this.props.data.file.childImageSharp.sizes} height="600" position="50% 30%"/>
        <SalesPitch />
        <Header title="Upcoming" />
        <PostListing postEdges={postEdges} view="galleryView" title="Upcoming Concerts"/>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___concertDate], order: ASC }
      filter: { frontmatter: { category: { eq: "upcoming"} } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            title
            description
            tags
            date
            category
            concertDate
            startTime
            location
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400, maxHeight: 300, quality: 80) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { regex: "/Einar7/"  }) {
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
