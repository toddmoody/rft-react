import React, { Component } from "react";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import ServicesCardChildGE from "../components/services/ServicesCardChildGE"
import ServicesCardChildSS from "../components/services/ServicesCardChildSS"

class Services extends Component {
  render() {
    return (
        <div>
          <header className="child-wrapper">
            <Navbar />
            <div className="page-title">
                <span>No job is too big or too small</span>
                <h2>Engineering Services</h2>
            </div>
          </header>
          <section id="child-services">
              <div className="wrapper">
                  <div className="child-services-wrapper">
                      <p className="statement">We specialise in the fabrication of structural steel - for commercial and residential properties. Please check out our range of services below.</p>
                      <p className="statement">Stainless steel is a practical addition to any home or business whether it’s a handrail, gate, pool surround or bollard. We will fabricate and install our polished Stainless Steel efficiently with little disruption to the client or other trades.</p>
                      <p className="statement">Note, all project designs can be fabricated in stainless steel, mild steel and alloy, mild steel and alloy can be Powder Coated to any colour required.</p>
                  </div>
                  <div className="child-services-cards">
                    <ServicesCardChildGE />
                    <ServicesCardChildSS />
                  </div>
              </div>
          </section>
          <Footer />
        </div>
    );
  }
}

export default Services;
