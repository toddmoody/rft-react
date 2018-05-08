import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import '../../../css/ServicesCard.scss';

class ServicesCardSS extends Component {
  render() {
    return (
      <NavLink to="/services" className="services">
          <h3>Structural steel</h3>
          <p>⇢</p>
      </NavLink>
    );
  }
}

export default ServicesCardSS;
