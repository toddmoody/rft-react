import React, { Component } from "react"
import Fade from "react-reveal/Fade";

import '../../css/ServicesCard.scss';

import Hiab from "../../assets/hiab.png"

class ServicesCardChildHI extends Component {
  render(){
    return (
      <Fade big>
        <div className="services-child">
          <div className="services-icon-child">
            <img src={Hiab} alt="hiab"></img>
          </div>
          <h3>15m hiab for hire</h3>
          <p className="statement">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
        </div>
      </Fade>
    );
  }
}

export default ServicesCardChildHI;
