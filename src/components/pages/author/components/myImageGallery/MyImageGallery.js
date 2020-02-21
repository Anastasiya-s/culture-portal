import React from 'react';

import ImageGallery from 'react-image-gallery';

import './MyImageGallery.css';

const MyImageGallery = (props) => {  
  return ( 
  <div>
    <ImageGallery items={props.images} />
  </div>    
  );
};

export default MyImageGallery;