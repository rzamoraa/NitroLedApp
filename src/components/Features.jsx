import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';
import Modal from './Modal';



const Features = () => {
  const videoRef = useRef();



  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  
  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
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

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc  ">
      <div className="screen-max-width">
        
        
        <div   className="flex flex-col justify-center items-center overflow-hidden ">
         


    






          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
                
              </div>
          

              <div className="feature-text-container">
                
                <div className="flex-1 flex-center">
                  
                  <p className="feature-text g_text">
                  <p className="hiw-bigtext">Equipo, creatividad, profesionalismo, eficiencia y eficacia </p>
                   

                    
                   
                  </p>
                </div>

                <div className="flex-1 flex-center text-justify">
                  <p className="feature-text g_text">
                  son nuestro desde para cada proyecto que desarrollamos,   
 {' '}
                    <span className="text-white ">
                    en el Taller de Diseño y Realización.
                    </span>, Con taller propio, hacemos magia y realidad cada diseño Diseñamos experiencias que marcan la diferencia. 
                   
                    <p className="hiw-bigtext"> </p>
                    
                  </p>
                </div>
   

              </div>
              
            </div>
            

           
          </div>
          
        </div>
        <div className="flex flex-col items-center  mt-20">
    
    
     
      </div>
     
    </div>
     
      
    </section>
  )
}

export default Features