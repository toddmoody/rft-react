import React, { Component } from 'react';

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../../../css/ProjectCard.scss';

import gwcv from "../../../assets/gwcv-lg-1.jpg";
import gwcv2 from "../../../assets/gwcv-lg-2.jpg";
import gwcv3 from "../../../assets/gwcv-lg-3.jpg";
import gwcv4 from "../../../assets/gwcv-lg-4.jpg";
import gwcv5 from "../../../assets/gwcv-lg-5.jpg";

const images = [
  gwcv,
  gwcv2,
  gwcv3,
  gwcv4,
  gwcv5,
];

class ProjectCardGWCV extends Component {
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
            <div className="project-img project-gwcv"></div>
            <div className="project-dets">
              <span className="tag">General Engineering</span>
              <h3>Grand Windsor - chrome vanity refurbish</h3>
              <p>⇢</p>
            </div>
          </div>
          <div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                imageCaption={"Grand Windsor (Auckland) - chrome vanity refurbish"}
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

export default ProjectCardGWCV;
