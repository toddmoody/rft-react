import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import '../../../css/ServicesCard.scss';

class ServicesCardGE extends Component {
  render() {
    return (
      
          <NavLink to="/services" className="services">
            <h3>General Engineering incl. mobile welding</h3>
            <p>⇢</p>
        </NavLink>
    );
  }
}

export default ServicesCardGE;
