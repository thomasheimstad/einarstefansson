import React from 'react';
import Img from "gatsby-image";

export default class Hero extends React.Component {
  state = {
    scrollTop : 0,
    windowWidth: '',
    windowHeight: '600'
  }
  handleScroll = () => {
    let distance = document.getElementById(`${this.props.id}`).getBoundingClientRect().top;
    this.setState({
      scrollTop: distance
    })
  }
  handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.setState({
          windowWidth: x,
          windowHeight: y
        })
  }
  checkWidth = () => {
    if(this.state.windowWidth > 768) {
      this.props.height
    } else {
    this.props.height/2
    }
  }
  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
  render = () => {
    let divHeightOrd = {
      height: this.props.height + "px"
    }
    let divHeightMobile = {
      height: this.props.height/2 + "px"
    }
    return (
      <div className="hero flex center" id={this.props.id}>
        {/*<div id={this.props.id} style={styles}>*/}
        <Img fluid={this.props.src} style={this.state.windowWidth > 768 ? divHeightOrd : divHeightMobile} position={this.props.position} fit={this.props.fit} />
        <div className="overcast" style={{ opacity: -this.state.scrollTop / 300}} ></div>
          {/* {this.props.forName ?
            <div className="flex">
              <div className="flex center">
                <h1>{this.props.forName}</h1>
                <h1>{this.props.lastName}</h1>
                <h1>{this.props.classification}</h1>
            </div>
          </div> : ''} */}
        {/*</div> */}
      </div>
    )
  }
}
