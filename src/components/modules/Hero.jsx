import React from 'react';
import DownArrow from 'react-icons/lib/fa/angle-down';

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
    let styles = {
      backgroundImage: `url("${this.props.src}")`,
      height: this.state.windowWidth > 768 ? this.state.windowHeight/this.props.headerSize : this.state.windowHeight/this.props.headerSize,
      backgroundPosition: this.props.bgpos
    }
    return (
      <div className="hero flex center">
        <div id={this.props.id} style={styles}>
          <div className="overcast" style={{ opacity: -this.state.scrollTop / 500 }} ></div>
          {/* {this.props.forName ?
            <div className="flex">
              <div className="flex center">
                <h1>{this.props.forName}</h1>
                <h1>{this.props.lastName}</h1>
                <h1>{this.props.classification}</h1>
            </div>
          </div> : ''} */}
        </div>
      </div>
    )
  }
}
