import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import discoverImg from '../assets/projects/discover-sharm.svg';
import waslaImg from '../assets/projects/wasla.svg';
import quranImg from '../assets/projects/quran.svg';

const projects = [
  {
    name: 'Discover Sharm',
    title: (
      <>
        DISCOVER <br />
        <span className="font-light italic text-gray-300 font-serif">Sharm</span>
      </>
    ),
    category: "Tourism Website & App",
    tools: "Web & Mobile",
    description: "Application and website promoting Egyptian tourism and trips in Sharm El Sheikh.",
    image: discoverImg,
    liveDemoLink: "https://www.discover-sharm.com"
  },
  {
    name: 'Wasla Vodacodes',
    title: (
      <>
        WASLA <br />
        <span className="font-light italic text-gray-300 font-serif">Vodacodes</span>
      </>
    ),
    category: "Training App",
    tools: "Vodafone Call Center",
    description: "Training app for Vodafone call center agents.",
    image: waslaImg
  },
  {
    name: 'Online Holy Quran',
    title: (
      <>
        ONLINE HOLY <br />
        <span className="font-light italic text-gray-300 font-serif">Quran</span>
      </>
    ),
    category: "Android App",
    tools: "Mobile",
    description: "Online Quran application for Android users.",
    image: quranImg
  }
];

const Project = () => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const imageBox = card.querySelector('.project-image-box');
        const img = card.querySelector('.project-image');
        const textBox = card.querySelector('.project-text-box');

        if (imageBox) {
          gsap.fromTo(
            imageBox,
            { y: 50, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (img) {
          gsap.to(img, {
            y: -25,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        if (textBox) {
          gsap.fromTo(
            textBox,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              delay: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    });
  }, []);

  return (
    <div id="projects" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-8 lg:gap-0 mb-16 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-2 sm:gap-3 flex-wrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-2 pt-1 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
            A self-taught developer, I build tourism and mobile applications alongside my career in hospitality.
          </p>
          <a href="#contact" className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={proj.name} 
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-8 md:gap-12 lg:gap-16 w-full group`}
            >

              {/* Image Side */}
              <div className="project-image-box w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-lg">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="project-text-box w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-4 md:mb-6">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#ccff00]/10 text-[#ccff00] text-xs font-semibold px-3 py-1 rounded-full border border-[#ccff00]/20">
                    {proj.category}
                  </span>
                  <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
                    {proj.tools}
                  </span>
                </div>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                  {proj.description}
                </p>

                {proj.liveDemoLink && (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                    <a
                      href={proj.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer px-6 py-3 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      Visit Website
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
