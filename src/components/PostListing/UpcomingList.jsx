import React from "react";
import FadeInWrapper from "../modules/FadeInWrapper";
import Link from "gatsby-link";

const UpcomingList = props => {
  return (
    <FadeInWrapper id={props.title}>
      <Link to={props.path}>
        <h2>{props.concertDateFormated}</h2>
        <h3>{props.title}</h3>
        <h4>{props.startTime ? props.startTime : 'TBA'}</h4>
        <h4>{props.location}</h4>
      </Link>
    </FadeInWrapper>
  )
}
export default UpcomingList;
