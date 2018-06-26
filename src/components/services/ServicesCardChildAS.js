import React, { Component } from "react"
import Fade from "react-reveal/Fade";

import '../../css/ServicesCard.scss';

import Thumb from "../../assets/ag-child-thumb.png"

class ServicesCardChildAS extends Component {
  render(){
    return (
      <Fade big>
        <div className="services-child">
          <div className="services-icon-child">
            <img src={Thumb} alt="Alloy, Galvanized & Stainless"></img>
          </div>
          <h3>Alloy, Galvanized & Stainless</h3>
          <p className="statement">Typically project designs can be fabricated into mild steel & alloy, galvanised, or stainless steel.  We can also provide a premium satin and polish, or arrange powder coating to your specific requirements.</p>
        </div>
      </Fade>
    );
  }
}

export default ServicesCardChildAS;
