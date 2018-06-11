import React, { Component } from 'react';
import Fade from "react-reveal/Fade";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import ProjectCardTRAL from '../components/home/project-cards/ProjectCardTRAL'
import ProjectCardSWHR from '../components/home/project-cards/ProjectCardSWHR'
import ProjectCardCSSG from '../components/home/project-cards/ProjectCardCSSG'
import ProjectCardCSRO from '../components/home/project-cards/ProjectCardCSRO'
import ProjectCardRSBE from '../components/home/project-cards/ProjectCardRSBE'
import ProjectCardCSCA from '../components/home/project-cards/ProjectCardCSCA'
import ProjectCardSSHRA from '../components/home/project-cards/ProjectCardSSHRA'
import ProjectCardCSCF from '../components/home/project-cards/ProjectCardCSCF'
import ProjectCardPPZA from '../components/home/project-cards/ProjectCardPPZA'

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
                      <h2>Residential & Commercial Projects</h2>
                  </div>
                </Fade>
            </header>
            <section id="child-projects">
                <div className="wrapper">
                    <div className="copy-wrapper">
                        <p>We’re proud to work on a wide range of engineering projects - both for commercial and residential properties. Typically our projects are located in the wider Papamoa/Tauranga region but we’re also willing to travel further afield in some cases for the right project - contact us to discuss.</p>
                    </div>
                    <div className="child-project-cards">
                        <ProjectCardTRAL />
                        <ProjectCardSWHR />
                        <ProjectCardCSSG />
                        <ProjectCardCSRO />
                        <ProjectCardRSBE />
                        <ProjectCardCSCA />
                        <ProjectCardSSHRA />
                        <ProjectCardCSCF />
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
