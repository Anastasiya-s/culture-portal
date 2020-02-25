import React from 'react';

import ImageGallery from 'react-image-gallery';

import './MyImageGallery.css';

const MyImageGallery = ({text, images}) => {  
  return ( 
  <div>
    <h2 style = {{textAlign: 'center'}}>{text}</h2>
    <ImageGallery items={images} />
  </div>    
  );
};

export default MyImageGallery;