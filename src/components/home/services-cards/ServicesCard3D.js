import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import Hiab from "../../../assets/hiab.png"

import '../../../css/ServicesCard.scss';

class ServicesCard3D extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
          <div className="services-icon">
            <img src={Hiab} alt="hiab"></img>
          </div>
          <h3>3D structural steel detailing</h3>
          <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCard3D;
