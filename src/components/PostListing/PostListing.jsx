import React from "react";
import Link from 'gatsby-link'
import GalleryView from '../../components/modules/GalleryView';
import FadeInWrapper from "../../components/modules/FadeInWrapper";

class PostListing extends React.Component {
  state={
    view: this.props.view
  }
  getPostList() {
    let today = new Date().toISOString();

    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      let gettime = '';
      if(postEdge.node.frontmatter.concertDate) {gettime = postEdge.node.frontmatter.concertDate}
      if(postEdge.node.frontmatter.position || postEdge.node.frontmatter.category === "blog" || this.props.tags) {
        postList.push({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          cover: postEdge.node.frontmatter.cover,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.frontmatter.date,
          category: postEdge.node.frontmatter.category,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
          thumbnail: postEdge.node.frontmatter.thumbnail,
          medialink: postEdge.node.frontmatter.medialink,
          description: postEdge.node.frontmatter.description,
          concertDate: postEdge.node.frontmatter.concertDate,
          startTime: postEdge.node.frontmatter.startTime,
          location: postEdge.node.frontmatter.location
        });
      } else if(postEdge.node.frontmatter.concertDate > today ) {
        postList.push({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          cover: postEdge.node.frontmatter.cover,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.frontmatter.date,
          category: postEdge.node.frontmatter.category,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
          thumbnail: postEdge.node.frontmatter.thumbnail,
          medialink: postEdge.node.frontmatter.medialink,
          description: postEdge.node.frontmatter.description,
          concertDate: postEdge.node.frontmatter.concertDate,
          startTime: postEdge.node.frontmatter.startTime,
          location: postEdge.node.frontmatter.location
        });
      }
    });
    return postList;
  }
  formatDate = (date) => {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    month = monthNames[d.getMonth()];

    return [day, month, year].join(' ');
  }
  render() {
    let defaultPostList = (...props) => {
      return (
        <div className="flex center">
          <p>
            {props[0]} <br/>
            {props[1]}
          </p>
        </div>
      )
    }
    let mediaPostList = (...props) => {
      if(props[1].indexOf("youtube") !== -1) {
        return (
          <FadeInWrapper id={props[0]} >
            <div className="flex column videoCard">
              <div className="basePad">
                <h2>{props[0]}</h2>
                <h3>{props[2]}</h3>
              </div>
              <div className="videoWrapper">
                <iframe width="560" height="349" src={props[1]} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </FadeInWrapper>
        )
      } else if (props[1].indexOf("soundcloud") !== -1) {
        return (
          <FadeInWrapper id={props[0]} >
            <div className="flex column videoCard">
              <div className="basePad">
                <h2>{props[0]}</h2>
                <h3>{props[2]}</h3>
              </div>
              <div className="soundcloudWrapper">
                <iframe src={props[1]} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </FadeInWrapper>
        )
      } else {
        return (
          ''
        )
      }
    }
    let upcomingList = (...props) => {
      return (
        <FadeInWrapper id={props[0]}>
          <Link to={props[6]}>
          <h2>{this.formatDate(props[2])}</h2>
          <h3>{props[0]}</h3>
          <h4>{props[3] ? props[3] : 'TBA'}</h4>
          <h4>{props[5]}</h4>
        </Link>
        </FadeInWrapper>
      )
    }
    let checkView = (props) => {
      if (this.state.view == "galleryView") {
        let formatedDate = this.formatDate(props.concertDate);
      return(
        <GalleryView
          src = {props.thumbnail.childImageSharp.sizes}
          title = {props.title}
          date = {props.date}
          excerpt = {props.excerpt}
          description = {props.description}
          tags = {props.tags}
          path = {props.path}
          timeToRead = {props.timeToRead}
          category = {props.category}
          concertDate = {formatedDate}
          startTime={props.startTime} />
      )
    } else if (this.state.view == "mediaView") {
        return(mediaPostList(props.title, props.medialink, props.description))
      } else if (this.state.view == "upcomingView") {
        return(upcomingList(props.title, props.description, props.concertDate, props.startTime, props.tags, props.location, props.path))
      } else {
        return(defaultPostList(props.title, props.date))
      }
    }

    const postList = this.getPostList();
    return (
      <div className={`${this.state.view} basePad`} >
        {/* Your post list here. */
        postList.map(post =>
          <div key={post.title} >
              {/* {post.thumbnail.childImageSharp.responsiveSizes.src.length > 0 ? <img src={post.thumbnail.childImageSharp.responsiveSizes.src} data-src={post.thumbnail.childImageSharp.responsiveSizes.src} data-srcset={post.thumbnail.childImageSharp.responsiveSizes.srcSet} data-sizes={post.thumbnail.childImageSharp.responsiveSizes.sizes} className="lazyload" alt={post.title}/> : ''} */}
              {/* Chech for returned thumbnail image. Return header  */}
              {checkView(post)}
          </div>
        )}
      </div>
    );
  }
}

export default PostListing;
