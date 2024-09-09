import React, { useState, useEffect } from 'react';
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Banner = () => {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative w-full h-72 overflow-hidden z-0">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-72 object-cover flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prevImage}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 hover:bg-slate-700 rounded-full ${
          currentImage === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentImage === 0}
      >
        <IoIosArrowBack className='text-3xl' />
      </button>
      <button
        onClick={nextImage}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-slate-700 text-white p-3 rounded-full ${
          currentImage === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentImage === images.length - 1}
      >
        <IoIosArrowForward className='text-3xl' />
      </button>

      
       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => goToImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
