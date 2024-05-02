import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import { animateWithGsap } from '../utils/animations';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0, duration: 2, stagger: 0.25 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 2, stagger: 0.25 })

    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 3}
    )
    animateWithGsap(
    '.g_sub',
    {y:0, opacity: 1,ease: 'power2.inOut',duration: 3}
  )

  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="features_title" className="section-heading">Somos expreciencia.</h1>

          <div className="flex flex-wrap items-end gap-5 g_sub">
            <p className="link ">
              Mira nuesrto reel
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
             revisa nuestros trabajos
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights