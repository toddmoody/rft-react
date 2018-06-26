import React, { Component } from "react"
import Fade from "react-reveal/Fade";

import '../../css/ServicesCard.scss';

import Thumb from "../../assets/ss-child-thumb.png"

class ServicesCardChildSS extends Component {
  render(){
    return (
      <Fade big>
        <div className="services-child">
          <div className="services-icon-child">
            <img src={Thumb} alt="Structural Steel"></img>
          </div>
          <h3>Structural Steel</h3>
          <p className="statement">We have your structural steel needs covered from fabrication to installation, no matter what size job. Typical jobs include: steel beams, canopies, and seismic strengthening of existing buildings.</p>
        </div>
      </Fade>
    );
  }
}

export default ServicesCardChildSS;
