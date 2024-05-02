import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Modal = ({ isOpen, close }) => {
  const modalRef = useRef();
  const contentRef = useRef([]);
  const videoRef = useRef();

   

  
  
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow= 'hidden';
      gsap.fromTo(modalRef.current,
        { y: 50 ,opacity: 0, scale: 1 },
        { y: 0  ,opacity: 1, scale: 1, duration: 1,  }
      );

      // Animación con stagger para los elementos de contenido
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.5, // Esperamos que el modal termine su animación
      });


      gsap.to('#exploreVideo', {
        scrollTrigger: {
          trigger: '#exploreVideo',
          toggleActions: 'play pause reverse restart',
          start: '10% bottom',
        },
        onComplete: () => {
          videoRef.current.play();
        }
      })
  
      animateWithGsap('#features_titlees', { y:0, opacity:1})
      animateWithGsap(
        '.g_grow',
        { scale: 1, opacity: 1, ease: 'power1' },
        { scrub: 5.5 }
      );
      animateWithGsap(
        '.g_text',
        {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
      )
      animateWithGsap('#features_titless', { y:0, opacity:1})


      
    } else {
      gsap.to(modalRef.current, { opacity: 0, scale: 0.95, duration: 0.5, ease: 'back.in(0.7)' });
      body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;







  
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-xl bg-opacity-50 flex justify-center items-center z-30" onClick={close}>
    <div
      className="bg-gray-300 p-8 rounded-lg shadow-lg max-h-full overflow-auto"
      onClick={e => e.stopPropagation()}
      ref={modalRef}
      style={{ width: '80%', maxHeight: '80vh' }}
    >
        <button
          className="control-btn"
          onClick={close}
          ref={el => contentRef.current[7] = el}
        >
            
          X
        </button>

        <h2 className="hiw-bigtext" ref={el => contentRef.current[0] = el }>Modal Title</h2>
        <p className="my-4" ref={el => contentRef.current[1] = el}>
          Este es un texto de prueba para demostrar el scroll dentro del modal. Vamos a añadir un texto largo para
          asegurarnos de que el scroll funcione correctamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>


        
        <div className="bg-black text-white p-8">
      {/* Primera fila con dos imágenes y textos debajo de ellas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Primer Item */}
        <div>
          <img src={explore2Img} alt="Detalle del Producto 1" className="w-full h-auto mb-4" />
          <p className="text-sm"><span className="font-bold">El elegante acabado</span> del marco de titanio es el resultado de una serie de procesos de lijado, cepillado, arenado y mecanizado de precisión. Dichosos los ojos.</p>
        </div>

        {/* Segundo Item */}
        <div>
          <img src={explore2Img} alt="Detalle del Producto 2" className="w-full h-auto mb-4" />
          <p className="text-sm"><span className="font-bold">El marco</span> tiene un nuevo diseño con bordes redondeados y es el más fino hasta ahora en un iPhone. Tu mano no va a poder con tanta comodidad.</p>
        </div>
      </div>

      {/* Segunda fila con una imagen más ancha y dos columnas de texto debajo de ella */}
      <div className="mt-8">
        <img src={explore2Img} alt="Detalle del Producto 3" className="w-full h-auto mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-sm"><span className="font-bold"></span></p>
          <p className="text-sm"><span className="font-bold"></span></p>
        </div>
      </div>
      <p className="hiw-text">Ser mejores cada día, innovar, buscar las mejores soluciones ante cada necesidad." </p>
                <p className="hiw-text">Brindar un servicio tecnológico integral, centrado en la satisfacción del cliente </p>              
                <p className="hiw-text">Poner a disposición de cada cliente nuestros mejores equipos y expertise</p>
                <p className="hiw-text">Proveer de todas las soluciones técnicas que la exigencia de cada proyecto nos plantea.</p>
                <p className="hiw-text">Acompañar desde la génesis a cada cliente, proporcionando todo el apoyo necesario </p>
                <p className="hiw-bigtext">para el éxito de su proyecto. </p>
    </div>



            







        
      </div>
    </div>
  );
};

export default Modal;
