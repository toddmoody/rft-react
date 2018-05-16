import React, { Component } from "react"

import '../../css/ServicesCard.scss';

import Hiab from "../../assets/hiab.png"

class ServicesCardChildSS extends Component {
  render(){
    return (
      <div className="services-child">
        <div className="services-icon-child">
          <img src={Hiab} alt="hiab"></img>
        </div>
        <h3>structural steel</h3>
        <p className="statement">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
      </div>
    );
  }
}

export default ServicesCardChildSS;
