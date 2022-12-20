import React, { useState } from 'react';
import GalleryWrapper from '../styles/GalleryWrapper';
import Thumbnail from './Thumbnail';
const galleryImage = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg'
]
function Gallery(props) {
  const [current,update] = useState(0)
  return (
    <GalleryWrapper>
      <div onClick={props.openLightbox} className='gallery-image clickable'>
        {galleryImage.map(( image,index ) => <img style={current === index ? {opacity: 1} : {opacity: 0}} src={image} alt="product image" key={index} />)}
      </div>
      <Thumbnail current={current} update={update}/>
    </GalleryWrapper>
  );
}

export default Gallery;