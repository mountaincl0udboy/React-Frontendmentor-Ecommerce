import React, { useState, useEffect } from 'react';
import LightboxWrapper from '../styles/LightboxWrapper';
import ModelBg from '../styles/ModelBg';
import GalleryWrapper from '../styles/GalleryWrapper';
import Thumbnail from './Thumbnail';

const galleryImage = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg'
]
function Lightbox(props) {
  const [current,update] = useState(0)
  const [show,setShow] = useState(false)
  const [transition,setTransition] = useState(false)
  useEffect(_ => {
    if (props.show) {
      setTimeout(_ => {
        setTransition(true)
      },8)
      setShow(true)
      return
    }
    setTransition(false)
    setTimeout(() => {
      setShow(false)
    }, 200);
  },[props.show])

  const next = _ => {
    if (current + 1 > galleryImage.length - 1) {
      update(0)
    }else {
      update(current + 1)
    }
  }
  const prev = _ => {
    if (current - 1 < 0) {
      update(galleryImage.length - 1)
    }else {
      update(current - 1)
    }
  }
  
  return (
    <LightboxWrapper show={show} transition={transition} className='clickable'>
      <ModelBg onClick={props.closeLightbox}/>
      <div className='lightbox-content'>
        <svg onClick={props.closeLightbox} className='close' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
        <GalleryWrapper lightbox>
          <div className='slide-grid'>
            <div className='btn' onClick={prev}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></div>
            <div className='gallery-image'>
              {galleryImage.map(( image,index ) => <img style={current === index ? {opacity: 1} : {opacity: 0}} src={image} alt="product image" key={index} />)}
            </div>
            <div className='btn' onClick={next}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></div>
          </div>
          <Thumbnail current={current} update={update}/>
        </GalleryWrapper>
      </div>
    </LightboxWrapper>
  );
}

export default Lightbox;