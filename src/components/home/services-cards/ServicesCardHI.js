import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import '../../../css/ServicesCard.scss';

class ServicesCardHI extends Component {
  render() {
    return (
      <Link to="/services/#service-c" className="services services-hi">
        <h3>15m HIAB For Hire</h3>
        <p>⇢</p>
      </Link>
    );
  }
}

export default ServicesCardHI;