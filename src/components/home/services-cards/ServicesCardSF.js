import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import '../../../css/ServicesCard.scss';

class ServicesCardSF extends Component {
  render() {
    return (
      <Link to="/services/#service-b" className="services services-sf">
        <h3>Steel Fabrication & Erection</h3>
        <p>⇢</p>
      </Link>
    );
  }
}

export default ServicesCardSF;
