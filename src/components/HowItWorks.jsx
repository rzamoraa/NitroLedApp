import React, { useRef, useState } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';



const HowItWorks = () => {
  const videoRef = useRef();



  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 5,
      duration: 2,
      ease: 'power2.inOut'
    })
  

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'power2.inOut'
    })

    animateWithGsap('#somos', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 1,
      scale: .9,
      duration: 5,
      ease: 'power1.inOut'
    })


  }, []);

  return (
    <section className="common-padding   ">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20 object-cover ">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 id='somos' className="hiw-title">
            Somos PODER
            <br /> El mejor partner para realizar tus proyectos.
          </h2>

          <p  id='somos'className="hiw-subtitle">
            una bajada linda para la parte concluyente de la sección
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Nombre del proyecto a mostrar</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                   breve intro de loq ue SOMOS{' '}
                    <span className="text-white">
                      lo que se logro en el proyecto
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   aca {' '}
                    <span className="text-white">
                      se llama a la acción
                    </span>,
                     y lo que se puede lograr trabajando juntos
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">por eso </p>
                <p className="hiw-bigtext">nitro es tu solucion </p>
                <p className="hiw-text">nos hacemos cargo de todo lo que neceitas para tu proyecto</p>
              </div>
              </div>
            </div>



    


      
    </section>
  )
}

export default HowItWorks