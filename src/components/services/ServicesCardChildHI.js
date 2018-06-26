import React, { Component } from "react"
import Fade from "react-reveal/Fade";

import '../../css/ServicesCard.scss';

import Thumb from "../../assets/hi-child-thumb.png";

class ServicesCardChildHI extends Component {
  render(){
    return (
      <Fade big>
        <div className="services-child">
          <div className="services-icon-child">
            <img src={Thumb} alt="HIAB for hire"></img>
          </div>
          <h3>15m HIAB For Hire</h3>
          <p className="statement">If your project requires heavy lifting, we have a 15m (driven) HIAB for hire. Perfect for getting your heavy project componentry into position and a much safer option than man-power.</p>
        </div>
      </Fade>
    );
  }
}

export default ServicesCardChildHI;
