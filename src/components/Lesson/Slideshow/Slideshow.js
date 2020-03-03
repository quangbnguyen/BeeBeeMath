import React from 'react';
import EachSlide from './EachSlide/EachSlide.js';
import { Slide } from 'react-slideshow-image';

// const slideImages = [
//   image1,
//   image2
// ];

const properties = {
  transition: 'stop',
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: true,
  autoplay: false,
}

export default function Slideshow(props) {
    return (
        
        <Slide {...properties} style={{maxWidth: '70vw', margin: 'auto', paddingTop: '20px'}}>
            {/* <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <span>Let's count from 1 to 10!</span>
                    <div style={{paddingLeft: '40px', paddingRight: '40px'}}>
                    </div>
                </div>
            </div> */


            props.images.map(url => {
                return <EachSlide url={url}/>
            })
            }
        </Slide>
    )
}