import React from 'react';
import Carousel from './Carousel';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
const images = [
   
    explore2Img,
    explore2Img,
    explore2Img,
    explore2Img,
    explore2Img,
    explore1Img,
    explore1Img,
    explore1Img,
  // ... más imágenes
];

function Galeria() {
  return (
    <div className=' '>
      <Carousel images={images} />
    </div>
  );
}

export default Galeria;
