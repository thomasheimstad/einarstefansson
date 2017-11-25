import React from 'react';

export default class Header extends React.Component {
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
    return(
      <div className="flex header column center basePad">
        <h1>{this.props.title}</h1>
        {this.props.concertDate ?
          <div className="flex row center"><h3>{this.props.concertDate}</h3><h4>{this.props.startTime}</h4><h4>{this.props.location}</h4></div>
          : '' }
      </div>
    )
  }
}
