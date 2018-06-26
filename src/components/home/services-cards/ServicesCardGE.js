import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import "../../../css/ServicesCard.scss";

class ServicesCardGE extends Component {
  render() {
    return (
        <Link to="/services/#service-a" className="services services-ge">
          <h3>General Engineering</h3>
          <p>⇢</p>
        </Link>
    );
  }
}

export default ServicesCardGE;
