import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../../../css/ProjectCard.scss';

import ppza from "../../../assets/ppza-lg.jpg";
import ppza2 from "../../../assets/ppza-lg-2.jpg";
import ppza3 from "../../../assets/ppza-lg-3.jpg";

const images = [
    ppza,
    ppza3,
    ppza2,
];

class ProjectCardPPZA extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
        <Fade big>
            <div className="projects" onClick={() => this.setState({ isOpen: true})}>
            <div className="project-img project-ppza"></div>
            <div className="project-dets">
                <span className="tag">General Engineering</span><span className="tag-add">Steel Fabrication</span>
                <h3>Papamoa Plaza - feature metal work.</h3>
                <p>⇢</p>
            </div>
            </div>
            <div>
            {isOpen && (
                <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageCaption={"Papamoa Plaza - feature metal work."}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                    })
                }
                />
            )}
            </div>
        </Fade>
    );
  }
}

export default ProjectCardPPZA;
