import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Carousel = ({ images }) => {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Configuración de animación para cada slide
  useEffect(() => {
    gsap.set(carouselRef.current.children, { xPercent: i => i * 100 });
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    gsap.to(carouselRef.current.children, {
      xPercent: i => (i - index) * 100,
      ease: 'power1.inOut',
      duration: 0.8
    });
  };

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-screen h-[500px] p-96 " >
      <div className="flex transition-all duration-700 ease-in-out" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="flex-none w-screen h-screen" style={{ minWidth: '100%' }}>
            <div className="w-screen h-screen bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
              {/* Si necesitas agregar contenido sobre la imagen, puede ir aquí */}
              asdsfasd
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 z-30 p-4 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75" style={{ top: '50%' }}>
        Prev
      </button>
      <button onClick={nextSlide} className="absolute right-0 z-30 p-4 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75" style={{ top: '50%' }}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
