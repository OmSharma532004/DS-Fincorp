import React, { useState, useEffect } from 'react';
import './Slider.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import icici from "./icici.png"
import hdfc from "./hdfc.jpeg"
import axis from "./axis.jpeg"
import sbi from "./sbi.webp"
import kotak from "./kotak.png"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    icici,
    sbi,
    hdfc,
    axis,
    kotak,
  
  ];

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
      <img src={photos[currentIndex]} alt={`slide-${currentIndex}`} />
      <button className="nav-button-next" onClick={nextSlide}>
      <FaAngleRight />
      </button>
    </div>
  );
};

export default Slider;
