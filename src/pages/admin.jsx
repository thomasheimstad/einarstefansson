import React from 'react';

export default class Admin extends React.Component {
  componentWillMount () {
      const script = document.createElement("script");

      script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
      script.async = true;

      document.body.appendChild(script);
    }
  render = () => {
    return(

    )
  }
}
