

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <div className='hero-sec'>
    <Carousel>
      <Carousel.Item>
      <img  src='https://img.freepik.com/free-vector/flat-supermarket-twitch-banner_23-2149357203.jpg?t=st=1727957202~exp=1727960802~hmac=e9dbea304434b861c2de473646983fcd99c76961ad5553a64e7e9467be6b0109&w=1060' style={{width:"100%"}} />
         
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-psd/nutrition-template-design_23-2151632671.jpg?t=st=1727957188~exp=1727960788~hmac=0bf91966bcd74e1e0be2f6dcfe06dcd9d6a049ebbe5917b98d93c672190abaa7&w=1060' style={{width:"100%"}} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img  src='https://img.freepik.com/free-psd/supermarket-template-design_23-2151822532.jpg?t=st=1727957341~exp=1727960941~hmac=bc256f391c4bec86569767c6c47c50af4228de24ce349b59ca2242890f9ca7b2&w=1060' style={{width:"100%"}} />
        
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Hero