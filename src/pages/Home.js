import React, { Component } from "react";
import { Link } from "react-router-dom"

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

import Sample from '../components/Sample';

//project card imports
import ProjectCardA from '../components/home/project-cards/ProjectCardA';
import ProjectCardB from '../components/home/project-cards/ProjectCardB';
import ProjectCardC from '../components/home/project-cards/ProjectCardC';

//SASS import statements
import '../css/Home.scss';
import '../css/Header.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="header-wrapper">
                    <Navbar />
                    <div className="content-block">
                        <div>
                            <h1>RFT ENGINEERING:</h1>
                            <h1>EFFICIENT, GUARANTEED, AND</h1>
                            <h1>PROFESSIONAL SERVICE.</h1>
                        </div>
                        <div className="btn-wrapper">
                            <a href="/#" className="hero-btn">More about us</a>
                        </div>
                    </div>  
                    <div className="scroll-down">
                        <span>What we do</span>
                        <FontAwesomeIcon className="bounce arrow" size="lg" icon={FaChevronDown}/>
                    </div>
                </header>
                <section id="intro">
                <div className="wrapper">
                    <div className="intro-wrapper">
                        <p className="statement">At RFT Engineering we specialise in the fabrication of structural steel - for commercial and residential properties. We pride ourselves on providing a full-service from fabrication right through to the installation of all structural steel, joists, decking, stairs and railings.</p> 
                    </div>
                    <div className="services-card-wrapper">
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
            <section id="projects">
                <div className="wrapper"> 
                    <div className="projects-wrapper">
                        <p className="sub-title-dk">Recent projects</p>
                        <p className="statement-dk">Check out some of our recent work below or <Link className="more-projects" to="/projects">view more projects.</Link></p>
                    </div>    
                    <div className="projects-card-wrapper"> 
                        <ProjectCardA />
                        <ProjectCardB />
                        <ProjectCardC />
                    </div>
                </div>
            </section>
            <section id="cta">
                <div className="wrapper">
                    <div className="cta-wrapper">
                        <p className="sub-title">Get in touch</p>
                        <p className="statemnent">Please contact us to disucss your residential or commercial engineering needs - no job is too big or too small.</p>
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