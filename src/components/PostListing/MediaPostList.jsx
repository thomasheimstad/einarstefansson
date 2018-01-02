import React from "react";
import FadeInWrapper from "../modules/FadeInWrapper";

const MediaPostList = props => {
  if(props.medialink.indexOf("youtube") !== -1) {
    return (
      <FadeInWrapper id={props.title} >
        <div className="flex column videoCard">
          <div className="basePad">
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
          </div>
          <div className="videoWrapper">
            <iframe width="560" height="349" src={props.medialink} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </FadeInWrapper>
    )
  } else if (props.medialink.indexOf("soundcloud") !== -1) {
    return (
      <FadeInWrapper id={props.title} >
        <div className="flex column videoCard">
          <div className="basePad">
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
          </div>
          <div className="soundcloudWrapper">
            <iframe src={props.medialink} frameBorder="0" allowFullScreen></iframe>
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
export default MediaPostList;
