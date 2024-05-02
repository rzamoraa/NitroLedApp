import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import CuboGrid from './components/Modulo';

import Galeria from './components/Galeria';

const App = () => {
  return (
    <main className="bg-black ">
  
        <div >  

        
      <Navbar />
      <Hero />
      
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
     
      </div>
    </main>
  )
}

export default Sentry.withProfiler(App);
