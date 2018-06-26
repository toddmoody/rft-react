import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import '../../../css/ServicesCard.scss';

class ServicesCard3D extends Component {
  render() {
    return (
        <Link to="/services/#service-c" className="services services-3d">
            <h3>3D Structural Steel Detailing</h3>
            <p>⇢</p>
        </Link>
    );
  }
}

export default ServicesCard3D;
