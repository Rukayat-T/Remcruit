import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import './Carousel.css'

function Carousel() {

  const images = [
    {
      original: 'http://source.unsplash.com/FBdmhGMdCso',
    },
    {
      original: 'http://source.unsplash.com/KHO_jvns5Xc',
    },
    {
      original: 'http://source.unsplash.com/FByBXI30S7M',
    },
  ];  
  return (
    <div className='Carousel'>
     <ImageGallery items={images}
      showFullscreenButton = {false}
      showPlayButton = {false}
      autoPlay = {true}
      disableSwipe = {true}
      showBullets = {true}
      showNav = {false}
      slideInterval = {90000}
      />
      
    </div>

  )
}

export default Carousel
 
