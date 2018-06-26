import React, { Component } from "react"
import Fade from "react-reveal/Fade";

import '../../css/ServicesCard.scss';

import Thumb from "../../assets/3d-bgrd.png"

class ServicesCardChild3D extends Component {
  render(){
    return (
      <Fade big>
        <div className="services-child">
          <div className="services-icon-child">
            <img src={Thumb} alt="3D steel detailing"></img>
          </div>
          <h3>3D Structural Steel Detailing</h3>
          <p className="statement">We are able to utilise the latest in 3D modelling tools & technology in order to organise the production of structural drawings for your engineering project.</p>
        </div>
      </Fade>
    );
  }
}

export default ServicesCardChild3D;
 