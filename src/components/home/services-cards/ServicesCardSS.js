import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import '../../../css/ServicesCard.scss';

class ServicesCardSS extends Component {
  render() {
    return (
      <Link to="/services/#service-a" className="services services-ss">
        <h3>Structural Steel</h3>
        <p>⇢</p>
      </Link>
    );
  }
}

export default ServicesCardSS;
