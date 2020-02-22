import React from 'react';

import ImageGallery from 'react-image-gallery';

import './MyImageGallery.css';

const MyImageGallery = (props) => {  
  return ( 
  <div>
    <h2 style = {{textAlign: 'center'}}>{props.text}</h2>
    <ImageGallery items={props.images} />
  </div>    
  );
};

export default MyImageGallery;