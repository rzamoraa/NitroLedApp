import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../../utils';

import './GlowBox.css';  // Importación del archivo CSS

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


const Contacto = ({ isOpen, close }) => {
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





       
  <div class="flex flex-col">

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
       
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#eef8ff] to-[#8fbdd3] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Contactanos</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
              integer elementum id sem. Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md  bg-slate-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

             
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

export default Contacto;
