import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar"
import GlobalCTA from "../components/GlobalCTA"
import Footer from "../components/Footer"

import ServicesCardChildGE from "../components/services/ServicesCardChildGE"
import ServicesCardChildSS from "../components/services/ServicesCardChildSS"
import ServicesCardChildSF from "../components/services/ServicesCardChildSF"
import ServicesCardChildAS from "../components/services/ServicesCardChildAS"
import ServicesCardChild3D from "../components/services/ServicesCardChild3D"
import ServicesCardChildHI from "../components/services/ServicesCardChildHI"

class Services extends Component {
  render() {
    return (
        <div>
            <header className="child-services-bgrd child-wrapper">
                <Navbar />
                <Fade big>
                <div className="page-title">
                    <span>No job is too big or too small</span>
                    <h2>Engineering services</h2>
                </div>
                </Fade>
            </header>
          <section id="child-services">
              <div className="wrapper">
                <div className="copy-wrapper">
                    <p>We specialise in the fabrication of structural steel - for commercial and residential properties. Please check out our range of services below.</p>
                    <p>Stainless steel is a practical addition to any home or business whether it’s a handrail, gate, pool surround or bollard. We will fabricate and install our polished Stainless Steel efficiently with little disruption to the client or other trades.</p>
                </div>
                <div className="child-services-cards">
                    <div id="service-a" className="service-row">
                    <ServicesCardChildGE />
                    <ServicesCardChildSS />
                    </div>
                    <div id="service-b" className="service-row">
                    <ServicesCardChildSF />
                    <ServicesCardChildAS />
                    </div>
                    <div id="service-c" className="service-row">
                    <ServicesCardChild3D />
                    <ServicesCardChildHI />
                    </div>
                </div>
              </div>
                <div className="close-statement wrapper">
                    <p className="statement">Note, all project designs can be fabricated in stainless steel, mild steel and alloy, mild steel and alloy can be Powder Coated to any colour required.</p>
                </div>
              </section>
            <GlobalCTA />
          <Footer />
        </div>
    );
  }
}

export default Services;
