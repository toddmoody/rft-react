import React, { Component } from 'react';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCardA from '../components/home/project-cards/ProjectCardA'

import '../css/Child.scss';

class Projects extends Component {
  render() {
    return (
        <div>
            <header className="child-wrapper">
                <Navbar /> 
                <div className="page-title">
                    <span>Check out our recent</span>
                    <h2>Residential & Commercial Projects</h2>
                    
                </div>
            </header>
            <section id="child-projects">
                <div className="wrapper">
                    <div className="child-projects-wrapper">
                        <p className="statement">We’re proud to work on a wide range of engineering projects - both for commercial and residential properties. Typically our projects are located in the wider Papamoa/Tauranga region but we’re also willing to travel further afield in some cases for the right project - contact us to discuss. </p>
                    </div>
                    <div className="child-project-cards">
                        <ProjectCardA />
                        <ProjectCardA />
                        <ProjectCardA />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
  }
}

export default Projects;
