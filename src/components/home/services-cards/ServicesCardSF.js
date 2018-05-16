import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import Hiab from "../../../assets/hiab.png"

import '../../../css/ServicesCard.scss';

class ServicesCardSF extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
        <div className="services-icon">
          <img src={Hiab} alt="hiab"></img>
        </div>
        <h3>Steel Fabrication & Steel Erection</h3>
        <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCardSF;
