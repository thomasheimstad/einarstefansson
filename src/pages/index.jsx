import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
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
      <Layout location={this.props.location}>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO postEdges={postEdges} pageImg={Einar} />
          <Hero id="indexID" src={this.props.data.file.childImageSharp.fluid} height="600" position="50% 30%"/>
          <SalesPitch />
          <Header title="Upcoming" />
          <PostListing postEdges={postEdges} view="upcomingView" title="Upcoming Concerts"/>
        </div>
      </Layout>
    );
  }
}

export default Index;
/* eslint no-undef: "off"*/
export const upcomingQueryIndex = graphql`
  query UpcomingQueryIndex {
    allMarkdownRemark(
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
                fluid(maxWidth: 400, maxHeight: 300, quality: 80) {
                  src
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
        fluid(maxWidth: 1920, maxHeight: 1100, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
