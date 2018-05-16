import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import Hiab from "../../../assets/hiab.png"

import '../../../css/ServicesCard.scss';

class ServicesCardHI extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
        <div className="services-icon">
          <img src={Hiab} alt="hiab"></img>
        </div>
        <h3>15m hiab for hire</h3>
        <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCardHI;
