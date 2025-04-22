// app/conference/components/ValueProposition.tsx


"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ValuePropositionProps {
  isLoaded: boolean;
}

export default function ValueProposition({ isLoaded }: ValuePropositionProps) {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          4 raisons de faire appel à Eventmaker pour vos conférences ou colloques
        </h2>
      </div>
    </div>
  );
}