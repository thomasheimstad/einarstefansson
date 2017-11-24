import React from 'react';

export default class Admin extends React.Component {
  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/netlify-cms@^0.7.0/dist/cms.css";
    script.async = true;

    document.body.appendChild(script);
  }
  render = () => {
    return(
      <div></div>
    )
  }
}
