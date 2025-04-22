// app/conference/components/HeroSection.tsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

interface HeroSectionProps {
  isLoaded: boolean;
}

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (isLoaded && sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-item');
      
      gsap.fromTo(elements, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, [isLoaded]);

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-950 overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 space-y-6">
            <p className="text-amber-700 dark:text-amber-300 uppercase font-semibold tracking-wider animate-item">
              Événement / Conférences
            </p>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight animate-item">
              Faites de vos conférences des moments de partage inspirants pour vos participants
            </h1>
            
            <div className="mt-8 animate-item">
              <Image 
                src="/conference-hero.jpg" 
                alt="Conférence en action" 
                width={600} 
                height={350} 
                className="rounded-lg shadow-xl w-full md:hidden" 
              />
            </div>
            
            <div className="mt-8 space-y-6 animate-item">
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Vous souhaitez organiser une conférence pour éduquer vos participants sur un sujet spécifique, pour promouvoir une cause, ou pour faciliter le réseautage entre professionnels ?
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                Expérimentez notre accompagnement dans l'ensemble de vos objectifs grâce à une plateforme tout-en-un et complète d'experts des professionnels de l'événementiel.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Profitez de modules très performants</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Facilitez le partage de connaissances, d'expériences et la diffusion d'informations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Renforcez votre image et celle de vos speakers avec des contenus à valeur ajoutée</span>
                </li>
              </ul>
              
              <div className="pt-4">
                <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md shadow-md transition-colors duration-300">
                  Découvrir nos fonctionnalités
                </button>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block md:w-1/2 pl-8 animate-item">
            <Image 
              src="/images/conference-hero.jpg" 
              alt="Conférence en action" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}