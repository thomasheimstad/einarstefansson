import React, {Fragment} from "react";
import Helmet from "react-helmet";
import Nav from '../components/modules/Nav';
import NavBar from '../components/modules/NavBar';
import ScrollBar from '../components/modules/ScrollBar';
import Footer from '../components/modules/Footer';
import '../css/index.scss';
import config from "../../data/SiteConfig";
export default class MainLayout extends React.Component {
  state = {
    showNav: false
  }
  handleClick = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath === "upcoming/") {
      title = "Upcoming";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children, location, state } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <NavBar showNav={this.state.showNav} handleClick={this.handleClick} />
        <Nav showNav={this.state.showNav} handleClick={this.handleClick} />
        <ScrollBar />
        <div className={this.state.showNav ? 'overlay' : 'overlayOut'} onClick={this.handleClick}></div>
        <div>
          {children}
        </div>
        <Footer config={config}/>
      </Fragment>
    )
  }
}
