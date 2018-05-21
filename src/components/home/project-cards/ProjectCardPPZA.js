import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../../../css/ProjectCard.scss';

import ppza from "../../../assets/ppza-lg.jpg";

const images = [
  ppza,
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
                <span className="tag">Structural steel</span>
                <h3>Papamoa Plaza Steel Fabrication.</h3>
                <p>⇢</p>
            </div>
            </div>
            <div>
            {isOpen && (
                <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageCaption={"Papamoa Plaza Steel Fabrication."}
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
