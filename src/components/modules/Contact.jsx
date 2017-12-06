import React from 'react';

export default class Contact extends React.Component {
  openMail = () => {
    console.log('yeah')
    window.location = "mailto:eina.ste@hotmail.com";
  }
  render = () => {
    return (
      <ul className="flex center">
        <li onClick={this.openMail}><a target="_blank"><h4>eina.ste@hotmail.com</h4></a></li>
      </ul>
    )
  }
}
