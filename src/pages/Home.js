import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

//header assets
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FaChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';

//intro component import statements
import ServicesCardGE from '../components/home/services-cards/ServicesCardGE';
import ServicesCardSS from '../components/home/services-cards/ServicesCardSS';
import ServicesCardSF from '../components/home/services-cards/ServicesCardSF';
import ServicesCardAS from '../components/home/services-cards/ServicesCardAS';
import ServicesCard3D from '../components/home/services-cards/ServicesCard3D';
import ServicesCardHI from '../components/home/services-cards/ServicesCardHI';

//project card imports
import ProjectCardOPBG from '../components/home/project-cards/ProjectCardOPBG';
import ProjectCardRSFW from '../components/home/project-cards/ProjectCardRSFW';
import ProjectCardPPZA from '../components/home/project-cards/ProjectCardPPZA';

//SASS import statements
import '../css/Home.scss';
import '../css/Header.scss';

class Home extends Component {
    render() {
        return (
            <div>
                  <header className="header-wrapper">
                      <Navbar />
                        <Fade big>
                          <div className="content-block">
                              <div>
                                  <h1>RFT Engineering:</h1>
                                  <h1>efficient, guaranteed, and</h1>
                                  <h1>professional service.</h1>
                              </div>
                              <div className="btn-wrapper">
                                  <Link to="/#intro" className="hero-btn">More about us</Link>
                              </div>
                          </div>
                      </Fade>
                      <Fade bottom>
                      <div className="scroll-down">
                          <span>What we do</span>
                          <Link to="/#intro"><FontAwesomeIcon className="bounce arrow" size="lg" icon={FaChevronDown}/></Link>
                      </div>
                      </Fade>
                  </header>

                <section id="intro">
                <div className="wrapper">
                    <div className="intro-wrapper">
                        <p className="statement">At RFT Engineering we specialise in the fabrication of structural steel - for commercial and residential properties. We pride ourselves on providing a full-service from fabrication right through to the installation of all structural steel, joists, decking, stairs and railings.</p>
                    </div>
                    <div className="services-card-wrapper">
                        <Fade big>
                          <div className="card-row-a">
                              <ServicesCardGE />
                              <ServicesCardSS />
                              <ServicesCardSF />
                          </div>
                        </Fade>
                        <Fade big>
                          <div className="card-row-b">
                              <ServicesCardAS />
                              <ServicesCard3D />
                              <ServicesCardHI />
                          </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="wrapper">
                    <div className="projects-wrapper">
                        <p className="sub-title-dk">Recent projects</p>
                        <p className="statement-dk">Check out some of our recent work below or <Link className="more-projects" to="/projects">view more projects.</Link></p>
                    </div>
                    <Fade big>
                      <div className="projects-card-wrapper">
                          <ProjectCardOPBG />
                          <ProjectCardRSFW />
                          <ProjectCardPPZA />
                      </div>
                    </Fade>
                </div>
            </section>
            <section id="cta">
                <div className="wrapper">
                    <div className="cta-wrapper">
                        <p className="sub-title">Get in touch</p>
                        <p className="statemnent">Please contact us to discuss your residential or commercial engineering needs - no job is too big or too small.</p>
                        <Link to="/contact" className="cta-btn">Contact us</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        );
    }
}

export default Home;
