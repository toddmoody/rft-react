import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Pin from '../assets/RFT-icon.png'

const LocatorPin = ({ text }) => (
    <div>
        <img src={Pin} alt="RFT Engineering" />
    </div>
  );
 
class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: -37.716445,
      lng: 176.312280
    },
    zoom: 12
  };
 
  render() {
    return (
      <div style={{ height: '55vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDkF28rsoWrpY5YVI6CQeTke39kcnx6NdA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocatorPin
            lat={-37.716445}
            lng={176.312280}
            text={'RFT Engineering'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;

