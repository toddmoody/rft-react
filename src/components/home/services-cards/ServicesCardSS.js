import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import Fade from "react-reveal/Fade";

import Hiab from "../../../assets/hiab.png"

import '../../../css/ServicesCard.scss';

class ServicesCardSS extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
        <div className="services-icon">
          <img src={Hiab} alt="hiab"></img>
        </div>
        <h3>Structural steel</h3>
        <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCardSS;
