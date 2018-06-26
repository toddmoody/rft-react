import React, { Component } from "react"
import Fade from "react-reveal/Fade";

import '../../css/ServicesCard.scss';

import Thumb from "../../assets/sf-child-thumb.png"

class ServicesCardChildSF extends Component {
  render(){
    return (
      <Fade big>
        <div className="services-child">
          <div className="services-icon-child">
            <img src={Thumb} alt="Steel Fabrication"></img>
          </div>
          <h3>Steel Fabrication & Erection</h3>
          <p className="statement">We specialise in the fabrication of structural steel - for both commercial and residential properties. We can fabricate and deliver to your specifications or provide full on-site erection and installation services.</p>
        </div>
      </Fade>
    );
  }
}

export default ServicesCardChildSF;
