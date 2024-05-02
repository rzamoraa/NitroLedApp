import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../../utils';

import './GlowBox.css';  // Importación del archivo CSS






const Homemodal = ({ isOpen, close }) => {
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
    <div className="fixed inset-0 bg-gray-600/20   backdrop-blur-sm  bg-opacity-90 flex justify-center items-center z-30 " onClick={close}>


      <div className='w-1/2 max-sm:w-1/4  ' >   </div> 


      <div className="  p-2 rounded-1xl   max-h-full overflow-auto line-clamp-6 glow-box  rounded-md backdrop-blur-sm  bg-white/20  "
      onClick={e => e.stopPropagation()}
      ref={modalRef}
      style={{ width: '80%', maxHeight: '80vh' }}
    >
      
      {/* deco arriba */}
        <top class="flex m-2">
    <point>
      <div className="bg-white  border border-slate-600 w-1 h-1 "> 
        <div className="bg-white  border border-slate-600 w-1 h-1 blur-sm"> 
        </div>
      </div>
    </point>
    <div class="grow h-1 scale-y-50  bg-gradient-to-r from-slate-50/10 via-slate-50/0 to-slate-50/10  ">  
    </div>
    <point>
      <div className="bg-white  border border-slate-600 w-1 h-1 "> 
        <div className="bg-white  border border-slate-600 w-1 h-1 blur-sm"> 
        </div>
      </div>
    </point>
        </top>





       
  <div class="flex flex-col h-96">

          {/* aca va el boton de salir */}
        <div class="h-1  m-0 flex  bg-gradient-to-r from-slate-50/0 via-slate-50/10 to-slate-50/0  ">
                  <div className="w-10/12 "> </div>

                   <button className=" bg-white  w-6  rounded-full   "
                   onClick={close}
                    ref={el => contentRef.current[0] = el}>
                      
                   </button>

                  <div className="w-10/12  "> </div>

        </div>

          {/* aca va el contenido del box */}
            <div class="grow  m-2">





           
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
            <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={100}
                height={100}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>


              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={100}
                height={100}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-0} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={2}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
          </svg>
          
          </div>
  
         
             
      
            


  </div>












            {/* deco abajo */}
        <bottom class="flex grow  m-2">
    <point>
      <div className="bg-white  border border-slate-600 w-1 h-1 "> 
        <div className="bg-white  border border-slate-600 w-1 h-1 blur-sm"> 
        </div>
      </div>
    </point>
    <div class="grow h-1 scale-y-50  bg-gradient-to-r from-slate-50/10 via-slate-50/0 to-slate-50/10">  
    </div>
    <point>
      <div className="bg-white  border border-slate-600 w-1 h-1 "> 
        <div className="bg-white  border border-slate-600 w-1 h-1 blur-sm"> 
        </div>
      </div>
    </point>
        </bottom>
      
      </div>


      <div className='w-1/2 max-sm:w-1/4'>   </div>
    </div>
  );
};

export default Homemodal;
