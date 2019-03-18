import React from "react";
import {Link} from 'gatsby'
import GalleryView from '../../components/PostListing/GalleryView';
import MediaPostList from '../../components/PostListing/MediaPostList';
import UpcomingList from '../../components/PostListing/UpcomingList';
import FadeInWrapper from "../../components/modules/FadeInWrapper";

export default class PostListing extends React.Component {
  state={
    view: this.props.view
  }
  getPostList() {
    let today = new Date().toISOString();
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      let gettime = '';
      let postListPusher = () => {
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
          concertDateFormated: this.formatDate(postEdge.node.frontmatter.concertDate),
          startTime: postEdge.node.frontmatter.startTime,
          location: postEdge.node.frontmatter.location
        })
      };
      if(postEdge.node.frontmatter.position || postEdge.node.frontmatter.category === "blog" || this.props.tags) {
        postListPusher();
      } else if(postEdge.node.frontmatter.concertDate > today ) {
        postListPusher();
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
  render = () => {
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
    let checkView = (props) => {
      if (this.state.view == "galleryView") {
        return <GalleryView
          title={props.title}
          category={props.category}
          timeToRead={props.timeToRead}
          path={props.path}
          concertDateFormated={props.concertDateFormated}
          thumbnail={props.thumbnail}
          concertDate={props.concertDate}
          startTime={props.startTime}
          tags={props.tags}
          description={props.description}
          excerpt={props.excerpt}
         />
    } else if (this.state.view == "mediaView") {
        return <MediaPostList {...props} />
    } else if (this.state.view == "upcomingView") {
        return <UpcomingList {...props} />
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
              {checkView(post)}
          </div>
        )}
      </div>
    );
  }
}
