import React, { Component } from 'react';

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../../../css/ProjectCard.scss';

import ssbe1 from "../../../assets/ssbe-lg-1.jpg";
import ssbe2 from "../../../assets/ssbe-lg-2.jpg";
import ssbe3 from "../../../assets/ssbe-lg-3.jpg";
import ssbe4 from "../../../assets/ssbe-lg-4.jpg";
import ssbe5 from "../../../assets/ssbe-lg-5.jpg";
import ssbe6 from "../../../assets/ssbe-lg-6.jpg";

const images = [
  ssbe4,
  ssbe5,
  ssbe6,
  ssbe1,
  ssbe2,
  ssbe3,
];

class ProjectCardSSBE extends Component {
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
            <div className="project-img project-ssbe"></div>
            <div className="project-dets">
            <span className="tag">3D Structural Steel Detailing</span><span className="tag-add">Structural Steel & Erection</span>
              <h3>3D Structural Steel Detailing & Erection - Tauriko.</h3>
              <p>⇢</p>
            </div>
          </div>
          <div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageCaption={"3D Structural Steel Detailing & Erection - Kennedy Rd, Tauriko."}
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

export default ProjectCardSSBE;
