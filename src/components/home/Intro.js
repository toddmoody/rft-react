import React, { Component } from 'react';


import '../../css/Intro.scss';
import ServicesCardGE from './services-cards/ServicesCardGE';
import ServicesCardSS from './services-cards/ServicesCardSS';
import ServicesCardSF from './services-cards/ServicesCardSF';
import ServicesCardAS from './services-cards/ServicesCardAS';
import ServicesCard3D from './services-cards/ServicesCard3D';
import ServicesCardHI from './services-cards/ServicesCardHI';

class Intro extends Component {
  render() {
    return (
    <section id="intro">
        <div className="wrapper">
            <div className="intro-wrapper">
                <p className="statement">At RFT Engineering we specialise in the fabrication of structural steel - for commercial and residential properties. We pride ourselves on providing a full-service from fabrication right through to the installation of all structural steel, joists, decking, stairs and railings.</p> 
            </div>
            <div className="card-wrapper">
                <div className="card-row-a">
                    <ServicesCardGE />
                    <ServicesCardSS />
                    <ServicesCardSF />
                </div>
                <div className="card-row-b">
                    <ServicesCardAS />
                    <ServicesCard3D />
                    <ServicesCardHI />
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Intro;
