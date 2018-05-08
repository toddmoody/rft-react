import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import '../../../css/ServicesCard.scss';

class ServicesCardSF extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
          <h3>Steel Fabrication & Steel Erection</h3>
          <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCardSF;
