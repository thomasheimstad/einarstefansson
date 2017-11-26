import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Hero from "../components/modules/Hero";
import Einar from "../posts/img/Einar7.jpg";
import PostListing from "../components/PostListing/PostListing";
import FadeInWrapper from "../components/modules/FadeInWrapper";
import SalesPitch from "../components/HomePageComponents/SalesPitch";
import Header from '../components/modules/Header';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} pageImg={Einar} />
        <Hero id="indexPage" src={Einar} bgpos="80% 30%" headerSize="1.1"/>
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
            concertDate
            startTime
            date
            category
            location
            thumbnail {
              childImageSharp {
                responsiveSizes(quality: 50, cropFocus: CENTER, toFormat: JPG) {
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
`;
