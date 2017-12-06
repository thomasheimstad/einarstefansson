import React, { Component } from "react";
import Link from "gatsby-link";
import NavLinks from "./NavLinks";
import UserLinks from "../UserLinks/UserLinks";
import Contact from "./Contact";
import SoMeButtons from "./SoMeButtons";
import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer flex column center basePad ">
        <div className="flex wrap center">
          <NavLinks />
          <Contact />
          <SoMeButtons config={config} />
        </div>
        {/* <UserLinks config={config} labeled /> */}
        <div className="flex row center">
          <h6>
            {copyright}
          </h6>
          {/* <Link to={url}>
            <button>Subscribe</button>
          </Link> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
