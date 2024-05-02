import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import React, { useRef, useState } from 'react'
import Modalhome from './pages/Homemodal';
import Contacto from './pages/Contacto';
import Estudio from './pages/Estudio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHomemodal = () => setIsOpen(!isOpen);

  const [isOpenServicios, setIsOpenServicios] = useState(false);
  const toggleServicios = () => setIsOpenServicios(!isOpenServicios);
  
  const [isOpenEstudio, setIsOpenEstudio] = useState(false);
  const toggleEstudio = () => setIsOpenEstudio(!isOpenEstudio);
  
  const [isOpenNosotros, setIsOpenNosotros] = useState(false);
  const toggleNosotros = () => setIsOpenNosotros(!isOpenNosotros);
  
  const [isOpenContacto, setIsOpenContacto] = useState(false);
  const toggleContacto = () => setIsOpenContacto(!isOpenContacto);


  return (
    <header className=" py-5 sm:px-10 px-5 flex justify-between items-center  z-10 fixed">
      <img src={"https://imgcdn.unilumin.com/media/upload/products/classic_s02.png"} alt="logo" className="w-10" />

      <nav className="flex screen-max-width bg-white/15 rounded-sm ">
   

        <div className="flex flex-1 m-2 justify-center ">
          
        <a href="#home" className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all   " >
        Home
      </a>
      <button className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all " onClick={toggleServicios}>
        Servicios
      </button>
      <button className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all " onClick={toggleEstudio}>
        Estudio
      </button>
      <button className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all " onClick={toggleNosotros}>
        Nosotros
      </button>
      <button className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all " onClick={toggleContacto}>
        Contacto
      </button>
         
        </div>

      
         
        
     
    
      <Modalhome isOpen={isOpen} close={toggleHomemodal} />
      <Servicios isOpen={isOpenServicios} close={toggleServicios} />
      <Estudio isOpen={isOpenEstudio} close={toggleEstudio} />
      <Nosotros isOpen={isOpenNosotros} close={toggleNosotros} />
      <Contacto isOpen={isOpenContacto} close={toggleContacto} />

      </nav>
    </header>
  )
}

export default Navbar