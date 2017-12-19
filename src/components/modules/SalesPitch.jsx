import React from 'react';
import MdRecordVoiceOver from 'react-icons/lib/md/record-voice-over';
import TiFlag from "react-icons/lib/ti/flag";
import School from "react-icons/lib/md/school";
import TiFlagOutline from "react-icons/lib/ti/flag-outline";

import FadeInWrapper from './FadeInWrapper';
export default class SalesPitch extends React.Component {
  render = () => {
  return (
    <div className="salesPitch flex spaceAround wrap basePad">
      <FadeInWrapper id="salesPitch1">
        <div className="flex center column">
          <MdRecordVoiceOver />
          <h2>Singer</h2>
          <p>Classical Bass</p>
        </div>
      </FadeInWrapper>
      <FadeInWrapper id="salesPitch2">
        <div className="flex center column">
          <p><TiFlag /><TiFlagOutline /></p>
          <h2>Icelandic/Norwegian</h2>
          <p>Multinational</p>
        </div>
      </FadeInWrapper>
      <FadeInWrapper id="salesPitch3">
        <div className="flex center column">
          <School />
          <h2>Student</h2>
          <p>Royal Northern College of Music, Manchester</p>
        </div>
      </FadeInWrapper>
      </div>
    )
  }
}
