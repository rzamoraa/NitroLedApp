import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../../utils';

import './GlowBox.css';  // Importación del archivo CSS


import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'


const primaryFeatures = [
  {
    name: 'Instalación de Pantallas LED',
    description:
      'Gestionamos toda la logística de instalación de pantallas LED para garantizar la máxima calidad visual en cada evento. Nuestra experiencia abarca desde pequeñas reuniones hasta grandes conciertos al aire libre.',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Producción de Eventos',
    description:
      'Ofrecemos servicios completos de producción de eventos, incluyendo sonido, iluminación, y video, para crear experiencias memorables que superan las expectativas de nuestros clientes.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Gestión de Contenidos Visuales',
    description:
      'Desarrollamos y gestionamos contenido visual atractivo para tus pantallas LED, asegurando que cada presentación tenga un impacto duradero.',
     href: '#',
    icon: CalendarDaysIcon,
  },
]
const secondaryFeatures = [
  {
    name: 'Soporte Técnico On-Site',
    description: 'Proporcionamos asistencia técnica durante el evento para asegurar que todo funcione sin contratiempos desde el inicio hasta el fin.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Certificaciones de Seguridad',
    description: 'Cumplimos con los más altos estándares de seguridad en la industria para garantizar la integridad de los asistentes y el equipo técnico.',
   icon: LockClosedIcon,
  },
  {
    name: 'Logística Completa',
    description: 'Ofrecemos servicios de logística integral que incluyen transporte, montaje y desmontaje de equipos.',
     icon: ArrowPathIcon,
  },
  {
    name: 'Innovaciones Tecnológicas',
    description: 'Nos mantenemos a la vanguardia de la tecnología visual, ofreciendo las últimas innovaciones en pantallas y soluciones interactivas.',
     icon: FingerPrintIcon,
  },
  {
    name: 'APIs para Integración',
    description: 'Facilitamos la integración de nuestras soluciones con otras plataformas y servicios para una mayor flexibilidad en la producción de eventos.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Respaldo de Datos en Tiempo Real',
    description: 'Implementamos soluciones de respaldo en tiempo real para garantizar que la información y los contenidos visuales estén seguros durante el evento.',
   icon: ServerIcon,
  },
]
const stats = [
  { id: 1, name: 'Eventos Realizados 2023', value: '120+' },
  { id: 2, name: 'Clientes Satisfechos', value: '300+' },
  { id: 3, name: 'Proyectos Originales', value: '120+' },
  { id: 4, name: 'Mts2 de pantalla LED disponibles', value: '2000+' },
]
const footerNavigation = {
  solutions: [
    { name: 'Soluciones de Pantallas', href: '#' },
    { name: 'Servicios de Producción', href: '#' },
    { name: 'Monitoreo de Eventos', href: '#' },
    { name: 'Servicios Empresariales', href: '#' },
   ],
   support: [
    { name: 'Precios', href: '#' },
    { name: 'Documentación', href: '#' },
    { name: 'Guías', href: '#' },
    { name: 'Referencia API', href: '#' },
  ],
  company: [
    { name: 'Acerca de', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Empleos', href: '#' },
    { name: 'Prensa', href: '#' },
    { name: 'Socios', href: '#' },
  ],
  legal: [
    { name: 'Reclamaciones', href: '#' },
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
   ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}


const Servicios = ({ isOpen, close }) => {
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


      <div className='w-1/4 max-sm:w-1/6  ' >   </div> 


      <div className="  p-2 rounded-1xl   max-h-full overflow-auto line-clamp-6 glow-box  rounded-md backdrop-blur-sm     "
      onClick={e => e.stopPropagation()}
      ref={modalRef}
      style={{ width: '80%', maxHeight: '80vh' }}>
      
      {/* deco arriba */}
        <top class="flex m-2 ">
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





       
  <div class="flex flex-col ">

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
            <svg x="50%" y="0" className="overflow-visible fill-gray-800/20">
    <title>Descripción del Icono</title>
  
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={2}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
          </svg>
            <div className=" ">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
        
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#6a6a6f] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <img
                className="h-11"
                src="/assets/images/apple.svg"
                alt="Nitro led"
              />
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6  text-slate-300 ring-1 ring-inset ring-indigo-500/20">
                   Servicios
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-100">
                   
                    <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </span>
                </a>
                
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Soluciones Integrales en Tecnología LED
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
              Desde la conceptualización hasta la realización, NitroLED ofrece soluciones completas para cualquier tipo de evento visual. Experimenta la diferencia con nuestros avanzados sistemas de pantallas LED y producción técnica especializada.

              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="Conoce más"
                  className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Conoce más
                </a>
                <a href="demostraciones" className="text-sm font-semibold leading-6 text-white">
                Ver demostraciones <span aria-hidden="true">→</span>
                </a>

              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none saturate-0">
                <img
                  src="/assets/images/explore2.jpg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Confianza global en nuestras soluciones visuales
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/images/client_logo_01.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/images/client_logo_02.png"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/images/client_logo_03.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/assets/images/client_logo_04.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/assets/images/client_logo_05.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-slate-300">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soluciones Integrales en Tecnología LED
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-100">
            Desde la conceptualización hasta la realización, NitroLED ofrece soluciones completas para cualquier tipo de evento visual. Experimenta la diferencia con nuestros avanzados sistemas de pantallas LED y producción técnica especializada.

            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-500">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-100">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-slate-300">
                                         Conoce más
 <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-slate-300">Servicios Completos en Tecnología Visual</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">De la idea a la experiencia visual</p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
              En NitroLED, transformamos cualquier espacio con tecnología LED de avanzada, ofreciendo desde la planificación y diseño hasta la ejecución y soporte técnico completo para cada evento. 

              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-100 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-slate-300" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-slate-300">Nuestra Trayectoria</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Confianza global en nuestras soluciones&nbsp;visuales
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-100">
            Nos enorgullece ser líderes en la industria de tecnología visual, 
            con más de una década de experiencia proporcionando servicios excepcionales para eventos, festivales, y corporativos.
            </p>
          </div>
        
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
          </svg>
          <div
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#6b6b6b] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Eleva tu próximo evento
              <br />
              Comienza con NitroLED hoy.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Contacta con nosotros y descubre cómo nuestras soluciones innovadoras pueden transformar tu evento.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Empezar ahora
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
              Más información <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
        
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
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


      <div className='w-1/4 max-sm:w-1/6'>   </div>
    </div>
  );
};

export default Servicios;
