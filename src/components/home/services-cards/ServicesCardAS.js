import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import '../../../css/ServicesCard.scss';

class ServicesCardAS extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
            <h3>Alloy & stainless</h3>
            <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCardAS;