import React from 'react';

export default class Admin extends React.Component {
  componentDidMount = () => {
      const script = document.createElement("script");

      script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
      script.async = true;

      document.getElementByID("adminDiv").appendChild(script);
    }
  render = () => {
    return(
      <div id="adminDiv"></div>
    )
  }
}
