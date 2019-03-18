import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Header from "../components/modules/Header";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class BlogPostList extends React.Component {
  state={
    sort: 'blog',
    order: 'ASC'
  }
  render() {
    const { category } = "blog";
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO postEdges={postEdges} />
          <Header title="Blog" />
          <PostListing postEdges={postEdges} view="galleryView"/>
        </div>
      </Layout>
    );
  }
}

export default BlogPostList;
/* eslint no-undef: "off"*/
export const postQuery = graphql`
  query AllPages {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "blog" }}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            tags
            category
            date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
