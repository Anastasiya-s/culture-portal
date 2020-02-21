import React from 'react';
import { Map,  Marker, Popup, TileLayer} from 'react-leaflet';

import './MapComponent.css';

const MapComponent = (props) => {
  const position = props.position;
  console.log(position);
  return (
      <Map center = {position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      </Map> 
    
  );
};

export default MapComponent;