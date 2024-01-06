import React, { useState, useEffect } from 'react';
import './Slider.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


const Slider = ({photos}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <button className="nav-button" onClick={prevSlide}>
      <FaAngleLeft />
      </button>
      <div className='flex  flex-row flex-wrap  items-center justify-around slider '>
      <div className='w-[166px] h-[120px] flex items-center justify-center  rounded-2xl bg-white'><img className=' mx-auto' src={photos[currentIndex]}    alt={`slide-${currentIndex}`} /></div>
      <div className='w-[166px] h-[120px] flex items-center justify-center  rounded-2xl bg-white'><img className='  mx-auto ' src={photos[(currentIndex+1)%photos.length]}  alt={`slide-${currentIndex}`} /></div>
      <div className='w-[166px] h-[120px] flex items-center justify-center  rounded-2xl bg-white'><img className='  mx-auto ' src={photos[(currentIndex+2)%photos.length]}  alt={`slide-${currentIndex}`} /></div>


      </div>
      
      <button className="nav-button-next " onClick={nextSlide}>
      <FaAngleRight />
      </button>
    </div>
  );
};

export default Slider;
