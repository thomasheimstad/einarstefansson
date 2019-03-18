import React from 'react';
import {MdRecordVoiceOver} from 'react-icons/md';
import {TiFlag} from "react-icons/ti";
import {MdSchool} from "react-icons/md";
import {TiFlagOutline} from "react-icons/ti";

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
          <p><TiFlag className="closeIcon"/><TiFlagOutline className="closeIcon"/></p>
          <h2>Icelandic/Norwegian</h2>
          <p>Multinational</p>
        </div>
      </FadeInWrapper>
      <FadeInWrapper id="salesPitch3">
        <div className="flex center column">
          <MdSchool />
          <h2>Student</h2>
          <p>Royal Northern College of Music, Manchester</p>
        </div>
      </FadeInWrapper>
      </div>
    )
  }
}
