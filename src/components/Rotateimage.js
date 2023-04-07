import React, { useRef } from 'react';
import roundthali from "../images/roundthali.png";

const RotateImage = ({  }) => {
  const imageRef = useRef(null);

  const rotateImageOnScroll = () => {

    const scrollPos = window.scrollY;

  
    imageRef.current.style.transform = `rotate(${scrollPos*0.18}deg)`;
  };

  window.addEventListener('scroll', rotateImageOnScroll);

  return (
    <img
      src={roundthali}
      alt=""
      ref={imageRef}
      className='round_thali'
    />
  );
};

export default RotateImage;