import React, { Component } from 'react';
import Fade from "react-reveal/Fade";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProjectCardOPBG from '../components/home/project-cards/ProjectCardOPBG';
import ProjectCardZEGH from '../components/home/project-cards/ProjectCardZEGH';
import ProjectCardSSBE from '../components/home/project-cards/ProjectCardSSBE';
import ProjectCardKABM from '../components/home/project-cards/ProjectCardKABM';
import ProjectCardKPGH from '../components/home/project-cards/ProjectCardKPGH';
import ProjectCardGWCV from '../components/home/project-cards/ProjectCardGWCV';
import ProjectCardSORV from '../components/home/project-cards/ProjectCardSORV';
import ProjectCardLJSH from '../components/home/project-cards/ProjectCardLJSH';
import ProjectCardCDOP from '../components/home/project-cards/ProjectCardCDOP';
import ProjectCardAAME from '../components/home/project-cards/ProjectCardAAME';
import ProjectCardRSFW from '../components/home/project-cards/ProjectCardRSFW';
import ProjectCardPPZA from '../components/home/project-cards/ProjectCardPPZA';

import '../css/Child.scss';
import GlobalCTA from '../components/GlobalCTA';

class Projects extends Component {
  render() {
    return (
        <div>
            <header className="child-projects child-wrapper">
                <Navbar />
                <Fade>
                  <div className="page-title">
                      <span>Check out our recent</span>
                      <h2>Residential & commercial projects</h2>
                  </div>
                </Fade>
            </header>
            <section id="child-projects">
                <div className="wrapper">
                    <div className="copy-wrapper">
                        <p>We’re proud to work on a wide range of engineering projects - both for commercial and residential properties. Typically our projects are located in the wider Papamoa/Tauranga region but we’re also willing to travel further afield in some cases for the right project - contact us to discuss.</p>
                    </div>
                    <div className="child-project-cards">
                        <ProjectCardOPBG />
                        <ProjectCardZEGH />
                        <ProjectCardSSBE />
                        <ProjectCardKABM />
                        <ProjectCardGWCV />
                        <ProjectCardSORV />
                        <ProjectCardKPGH />
                        <ProjectCardCDOP />
                        <ProjectCardLJSH />
                        <ProjectCardAAME />
                        <ProjectCardRSFW />
                        <ProjectCardPPZA />
                    </div>
                </div>
            </section>
            <GlobalCTA />
            <Footer />
        </div>
    );
  }
}

export default Projects;
