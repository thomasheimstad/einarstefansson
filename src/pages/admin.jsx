import React, { Component } from "react";
import Helmet from "react-helmet";

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Content Manager</title>

          <link
            rel="stylesheet"
            href="https://unpkg.com/netlify-cms@^0.7.5/dist/cms.css"
          />
          <link
            rel="stylesheet"
            href="../css/index.scss" />
          <script src="https://unpkg.com/netlify-cms^0.7.5/dist/cms.js" />
        </Helmet>
      </div>
    );
  }
}

export default Admin;
