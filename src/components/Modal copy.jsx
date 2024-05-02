import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Modal = ({ isOpen, close }) => {
  const modalRef = useRef();
  const contentRef = useRef([]);
  const videoRef = useRef();

   
  useGSAP(() => {
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

  
    
   
  
  }, []);

  
  
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
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
      body.style.overflow = 'visible';
    }
  }, [isOpen]);

  if (!isOpen) return null;







  
  return (
    <div className="fixed inset-0 bg-black  backdrop-blur-xl bg-opacity-50 flex justify-center items-center z-30" onClick={close}>
      <div
        className=" bg-gray-300 p-8 rounded-lg shadow-lg max-h-full overflow-auto"
        onClick={e => e.stopPropagation()}
        ref={modalRef}
        style={{ width: '80%', maxHeight: '80vh' }}
      >
        <h2 className="hiw-bigtext" ref={el => contentRef.current[0] = el }>Modal Title</h2>
        <p className="my-4" ref={el => contentRef.current[1] = el}>
          Este es un texto de prueba para demostrar el scroll dentro del modal. Vamos a añadir un texto largo para
          asegurarnos de que el scroll funcione correctamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>







           
        <div   className="flex flex-col justify-center items-center overflow-hidden ">        
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center" ref={el => contentRef.current[3] = el}>
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]" ref={el => contentRef.current[4] = el}>
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]" ref={el => contentRef.current[5] = el}>
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>               
              </div>
              
              <div className="feature-text-container"  ref={el => contentRef.current[6] = el}>               
                <div className="flex-1 flex-center">                  
                  <p>
                  <p className="hiw-bigtext" >Equipo, creatividad, profesionalismo, eficiencia y eficacia </p>
                   son nuestro desde para cada proyecto que desarrollamos, {' '}
                    <span className="text-white">
                    en el Taller de Diseño y Realización.
                    </span>,                                    
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p>
                  Con taller propio, hacemos magia y realidad cada diseño {' '}                  
                    <p className="hiw-bigtext">Diseñamos experiencias que marcan la diferencia. </p>                  
                  </p>
                </div>
              </div>          
            </div>
            




          </div>
        </div>





        <button
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={close}
          ref={el => contentRef.current[7] = el}
        >
            
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
