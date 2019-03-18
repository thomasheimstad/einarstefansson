import React from 'react';
import {Link} from 'gatsby';
import FadeInWrapper from './FadeInWrapper';
import PostTags from '../PostTags/PostTags';
import Img from "gatsby-image";
import {FaCalendar} from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa";
export default class GalleryView extends React.Component {
  state={
    showCardContent: false,
    windowWidth: '',
    rotater: false
  }
  checkH5content = (category,timeToRead,startTime,title) => {

    if(category == "blog") {
      return (
        <h5>{timeToRead} min read</h5>
      )
    } else if(category == "upcoming"){
      return (
        <h5>{startTime ? startTime : title }</h5>
      )
    } else {
      return (
        <h5>{title}</h5>
      )
    }
  }
  onClickHandler = () => {
    this.setState({
      showCardContent: !this.state.showCardContent,
      rotater: !this.state.rotater,
    })
  }
  onWindowResize = () => {
    this.setState({
      windowWidth: document.documentElement.clientWidth
    })
    this.checkWindowWidth();
  }
  checkWindowWidth = () => {
    this.state.windowWidth < 600 ? this.setState({showCardContent: false}) : this.setState({showCardContent: true})
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.onWindowResize);
    setTimeout(() => {
      this.onWindowResize();
  }, 1)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResize);
  }
  render = () => {
    return (
    <FadeInWrapper id={this.props.title} >
      <div className="postCard">
        <Link to={this.props.path} key={this.props.title}>
          <header>
            <Img fluid={this.props.thumbnail.childImageSharp.fluid} />
              <div className="flex center">
                <h3>
                  {this.props.title}
                </h3>
              </div>
          </header>
        </Link>
        <div className="flex postCardTitle">
          <div className="flex center iconWrapper noPointer"><FaCalendar className="reactIcon"/></div>
          <div className="flex column"><h5>{this.props.concertDate === "NaN  NaN" ? this.props.title : this.props.concertDate}</h5>
            {this.checkH5content(this.props.category, this.props.timeToRead, this.props.startTime, this.props.title)}
          </div>
          {this.state.windowWidth < 600 ?
            <div onClick={this.onClickHandler} className="iconWrapper flex center noBackground"><FaAngleDown className={"reactIcon "  + (this.state.rotater ? 'rotateTo' : 'rotateBack')}/></div> :
             ''}
        </div>
        <div className={'flex postCardContent center column ' + (this.state.showCardContent ? 'showCards' : 'hideCards')}>
          <div><p>{this.props.description ? this.props.description : this.props.excerpt}</p></div>
          {/*<div className="flex center row wrap">{this.props.tags ? this.props.tags.map(x=>{return <Link key={x} to={"tags/" + x.replace(" ", "-")}>{x}</Link>}) : 'failed'}
        </div> */}
        <PostTags tags={this.props.tags} />
      </div>
    </div>
  </FadeInWrapper>
  )
}
}
