import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import Hero from "../components/modules/Hero";
import Einar6 from "../posts/img/Einar6.jpg";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about flex center column">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero id="aboutID" src={this.props.data.file.childImageSharp.sizes} height="600" position="30% 30%" fit="cover"/>
        <About />
      </div>
    );
  }
}
export default AboutPage;
export const query = graphql`
  query GatsbyImageSampleQueryAbout {
    file(relativePath: { regex: "/Einar6/"  }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1620, maxHeight: 1100, quality: 80) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
