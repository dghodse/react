import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import "./gallery.css";

const fadeImages = [
  'https://images.unsplash.com/photo-1589526603318-2c0ba291ffc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMHNjYXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1605640486537-93da02d98119?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1597415604204-368e71fecaab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
];

const Slideshow = () => {
  return (
    <div className="slide-container slide">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img className="cover" src={fadeImages[0]} alt="img1"/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img className="cover" src={fadeImages[1]} alt="img2"/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img className="cover" src={fadeImages[2]} alt="img3" />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;