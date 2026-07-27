'use client';

import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BeyondCoding from './BeyondCoding/BeyondCoding';
const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Project />
      <Skills />
      <About />
      <BeyondCoding />
    </div>
  );
};

export default Home;
