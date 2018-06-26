import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";


import '../../../css/ServicesCard.scss';

class ServicesCardAS extends Component {
  render() {
    return (
      <Link to="/services/#service-b" className="services services-as">
        <h3>Alloy, Galvanized & Stainless</h3>
        <p>⇢</p>
      </Link>
    );
  }
}

export default ServicesCardAS;
