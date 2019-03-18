import React from 'react';
import {Link} from 'gatsby';

export default class NavLinks extends React.Component {
  consoleThis = () => {
    console.log("hash has changed")
  }
  componentDidMount = () => {
    window.addEventListener("popstate", this.consoleThis);
  }
  render = () => {
    return (
      <ul className="flex center">
        <li onClick={this.props.handleClick}><Link to="/"><h4>Home</h4></Link></li>
        <li onClick={this.props.handleClick}><Link to="/media"><h4>Media</h4></Link></li>
        <li onClick={this.props.handleClick}><Link to="/blog"><h4>Blog</h4></Link></li>
        <li onClick={this.props.handleClick}><Link to="/upcoming"><h4>Upcoming</h4></Link></li>
        <li onClick={this.props.handleClick}><Link to="/about"><h4>About</h4></Link></li>
      </ul>
    )
  }
}
