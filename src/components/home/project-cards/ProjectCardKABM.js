import React, { Component } from 'react';

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../../../css/ProjectCard.scss';

import kabm1 from "../../../assets/kabm-lg-1.jpg";
import kabm2 from "../../../assets/kabm-lg-2.jpg";
import kabm3 from "../../../assets/kabm-lg-3.jpg";
import kabm4 from "../../../assets/kabm-lg-4.jpg";

const images = [
  kabm1,
  kabm2,
  kabm3,
  kabm4,
];

class ProjectCardKABM extends Component {
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
            <div className="project-img project-kabm"></div>
            <div className="project-dets">
              <span className="tag">Alloy, Galv & Stainless</span><span className="tag-add">Steel Fabrication</span>
              <h3>Kombi Apartments - steel balustrades.</h3>
              <p>⇢</p>
            </div>
          </div>
          <div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageCaption={"Kombi Apartments - steel balustrades (Mount Maunganui)."}
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

export default ProjectCardKABM;
