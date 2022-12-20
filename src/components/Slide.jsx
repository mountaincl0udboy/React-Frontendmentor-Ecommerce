import React, { useState } from 'react';
import SlideWrapper from '../styles/SlideWrapper';
const slides = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg'
]

function Slide(props) {
  const [current,update] = useState(0)
  const next = _ => {
    if (current + 1 > slides.length - 1) {
      update(0)
    }else {
      update(current + 1)
    }
  }
  const prev = _ => {
    if (current - 1 < 0) {
      update(slides.length - 1)
    }else {
      update(current - 1)
    }
  }

  return (
    <SlideWrapper>
      <div className='slide-image'>
        {slides.map(( slide,index ) => <img style={current === index ? {opacity: 1} : {opacity: 0}} src={slide} alt="product image" key={index} />)}
      </div>
      <div className='btn clickable' onClick={prev}><img src="images/icon-previous.svg" alt="previous icon" /></div>
      <div className='btn clickable' onClick={next}><img src="images/icon-next.svg" alt="next icon" /></div>
    </SlideWrapper>
  );
}

export default Slide;