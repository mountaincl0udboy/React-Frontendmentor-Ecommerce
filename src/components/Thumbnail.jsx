import React from 'react';
import ThumbnailWrapper from '../styles/ThumbnailWrapper';
const galleryThumb = [
  'images/thumbnail-product-1.jpg',
  'images/thumbnail-product-2.jpg',
  'images/thumbnail-product-3.jpg',
  'images/thumbnail-product-4.jpg'
]
function Thumbnail(props) {
  return (
    <ThumbnailWrapper className='gallery-thumbnail'>
      {galleryThumb.map(( thumb,index ) => <div key={index} className={props.current == index ? 'thumbnail-active clickable' : 'clickable'} onClick={_ => props.update(index)} ><img src={thumb} alt="product image" key={index} /></div>)}
    </ThumbnailWrapper>
  );
}

export default Thumbnail;