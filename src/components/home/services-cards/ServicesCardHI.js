import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import '../../../css/ServicesCard.scss';

class ServicesCardHI extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
          <h3>15m hiab for hire</h3>
          <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCardHI;
