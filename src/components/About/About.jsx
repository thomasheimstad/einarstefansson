import React, { Component } from "react";
import Contact from "../modules/Contact";
import SoMeButtons from "../modules/SoMeButtons";

class About extends Component {
  style = {
    backgroundColor: "grey"
  }
  render() {
    return (
      <div className="about flex center column post">
        <div className="postContent">
          <div className="blogPost basePad">
          <h1>Bio</h1>
          <p>
            Icelandic/Norwegian bass Einar Stefánsson is currently studying for a BMus (Hons) degree at the prestigious Royal Northern College of Music in Manchester, UK. He has been part of Bergen National Opera’s talent programme Unge Stemmer (Young Voices) in Norway since 2016, and has taken part in numerous productions with the same company since 2010.
          </p>
          <p>
            Einar regularly performs with the ambitious Edvard Grieg Youth Choir, of which he has been a member since its foundation in 2013. In addition to regular coachings and concerts with their mentor choir, the professional vocal ensemble Edvard Grieg Kor, the Youth Choir has performed with international artists such as The Rolling Stones, Bergen Philharmonic Orchestra, Edward Gardner, Masaaki Suzuki and Sir Andrew Davies. Einar’s musical background and experience is broad, and although his main passion is music from the 19th Century, his musical interests span from Baroque opera and oratorio to contemporary music. Einar started his musical career playing the violin from the age of 5, among other things bringing him to play with the National Youth Orchestra in Norway, with which he toured in Canada, the United States, Russia and Norway. As a boy he joined the Bergen Boys’ Choir and later the Bergen Philharmonic Choir.
          </p>
          <p>
            Einar’s previous teachers include David Hansford and distinguished British bass-baritone Simon Kirkbride. He has also had coaching with performers such as world-renowned pianist Helmut Deutsch and Einar Steen-Nøkleberg. Since 2016 Einar has been studying with internationally acclaimed bass Matthew Best at the Royal Northern College of Music with generous support from the Waverly Fund.
          </p>
          <p>
            Recent highlights include performances at Bergen National Opera’s opera festival ‘Mimì Goes Glamping’ in Norway, as a soloist in Ariel Ramirez’ ‘Misa Criolla’, and appearances as a pop-up opera artist during the World Cycling Championship in Bergen, Norway.
          </p>
          <div className="flex column center">
            <ul><li><h2>Contact information</h2></li></ul>
            <Contact />
            <SoMeButtons />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
