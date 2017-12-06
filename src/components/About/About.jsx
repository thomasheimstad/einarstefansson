import React, { Component } from "react";

import "./About.css";

class About extends Component {
  style = {
    backgroundColor: "grey"
  }
  render() {
    const aboutnode = this.props.postEdges[0].node;
    return (
      <div className="about flex center column post">
        <div className="postContent">
          <div className="blogPost basePad">
            <div dangerouslySetInnerHTML={{ __html: aboutnode.html }} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
