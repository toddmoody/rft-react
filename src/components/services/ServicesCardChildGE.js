import React, { Component } from "react"
import Fade from "react-reveal/Fade";

import '../../css/ServicesCard.scss';

import Thumb from "../../assets/ge-child-thumb.png"

class ServicesCardChildGE extends Component {
  render(){
    return (
      <Fade big>
        <div className="services-child">
          <img src={Thumb} alt="General Engineering"></img>
          <h3>General Engineering</h3>
          <p className="statement">We handle all forms of general engineering work including steel production, marine engineering, tool-making, balustrades, handrails and general welding (incl. repair-work).</p>
        </div>
      </Fade>
    );
  }
}

export default ServicesCardChildGE;
