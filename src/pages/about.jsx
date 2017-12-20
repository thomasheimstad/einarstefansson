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
        <Hero id="aboutPage" src={Einar6} bgpos="30% 30%" headerSize="1.3"/>
        <About />
      </div>
    );
  }
}
export default AboutPage;
