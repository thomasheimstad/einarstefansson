import React from 'react';
import {Link} from 'gatsby'

export default class NavBar extends React.Component{
  state = {
    invis: "transparent"
  }
  handleScroll = () => {
    if(window.pageYOffset > 30|| document.documentElement.scrollTop > 30 || document.body.scrollTop > 30 || 0 > 30) {
      this.setState({
        invis: "untransparent"
      })
    } else {
      this.setState({
        invis: "transparent"
      })
    }
  }
  componentDidMount = () => {
   window.addEventListener('scroll', this.handleScroll);
 }
 componentWillUnmount = () => {
   window.removeEventListener('scroll', this.handleScroll);
 }
  render = () => {
    return (
        <div className={`mainNavBar ${this.state.invis}`}>
          <div className="mainNavBarHeader">
              <div onClick={this.props.handleClick}><h4>menu</h4></div>
              <Link to="/"><h2>Einar Stefánsson | Classical Bass</h2></Link>
              <p></p>
          </div>
        </div>
      );
    }}
