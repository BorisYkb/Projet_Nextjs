// app/conference/components/Support.tsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SupportProps {
  isLoaded: boolean;
}

export default function Support({ isLoaded }: SupportProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (isLoaded && sectionRef.current) {
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
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
    <div ref={sectionRef} className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Vous accompagner à chaque étape</h2>
          
          <p className="text-gray-300 mb-4">
            Lors de l'organisation de conférences, il est essentiel de construire un programme complet, prendre en compte la gestion de vos invités, et assurer que l'expérience digitale offre une valeur ajoutée à travers une interface personnalisable qui correspond à votre marque et à vos besoins spécifiques.
          </p>
          
          <p className="text-gray-300 mb-8">
            Avec Eventmaker, laissez-vous guider par nos experts dédiés à la réussite de vos projets et construisez vous aussi des formats variés grâce à notre savoir-faire unique !
          </p>
        </div>
      </div>
    </div>
  );
}