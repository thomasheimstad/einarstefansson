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
            Icelandic/Norwegian bass Einar Stefánsson is currently studying at the prestigious Royal Northern College of Music in Manchester. He is part of the Young Artist Programmes of Buxton International Festival and the leading Norwegian opera company Bergen National Opera. Einar is also associated with the inventive Manchester based collective The Opera Shack.
          </p>
          <p>
            Einar started his musical career playing the violin from the age of 5, among other things bringing him on tour to Canada, the US, Norway and Russia with the National Youth Orchestra of Norway. As a boy he joined Bergen Boys’ Choir and later the Bergen Philharmonic Choir.
          </p>
          <p>
            Einar’s previous teachers include David Hansford and distinguished bass-baritone Simon Kirkbride. He has also worked with world-renowned pianists Julius Drake, Helmut Deutsch and Einar Steen-Nøkleberg. Since 2016 Einar has been studying with internationally acclaimed bass Matthew Best at the Royal Northern College of Music supported by the Waverly Fund and a James and Mary Glass Award.
          </p>
          <p>
          Einar regularly sings with the ambitious Edvard Grieg Youth Choir. He has also performed with ensembles such as Opera North, RNCM Opera, numerous productions with Bergen National Opera, West Cumberland Choral Society and the Yorke Trust as well as at Bergen National Opera’s opera festival ‘Mimì Goes Glamping’ and as a pop-up opera artist during the World Cycling Championship in Norway.
          </p>
          <p>
          Being curious and versatile, Einar has developed a broad musical interest. He has developed a particular interest in contemporary and experimental music. This has led to a number of adventurous projects over recent years, involving collaborative projects, electronic music and dancing at the bottom of an (empty) swimming pool. In June 2018 Einar created the roles of Kapo/Nazi Officer/Dr Rudi in the world premiere of Adam Gorb’s opera The Path to Heaven at Howard Assembly Room in Leeds to great critical acclaim. Another recent highlight includes premiering La Donna della Finestra commissioned by Bergen National Opera from Tyrone Landau for members of its Unge Stemmer talent programme. A similar collaboration with Tyrone is planned for the spring of 2020.
          </p>
          <p>
          Other exciting projects ahead include the roles of Bartolo and Antonio in Mozart’s The Marriage of Figaro with Access All Arias as well as a new experimental work with voice and electronics with composer Shaun Davies. Also on the list of cool things coming up is the role of Brühlmann in Massenet’s Werther with Bergen National Opera and the role of The Judge in Buxton International Festival’s production of the contemporary South African opera The Orphans of Kumbu. During Buxton International Festival 2019 Einar will also be part of the chorus in Eugene Onegin and perform at the opening gala concert.
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
