// app/conference/components/Features.tsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

interface FeaturesProps {
  isLoaded: boolean;
}

export default function Features({ isLoaded }: FeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (isLoaded && sectionRef.current) {
      const featureItems = sectionRef.current.querySelectorAll('.feature-item');
      
      gsap.fromTo(featureItems, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.3, 
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

  const features = [
    {
      id: 1,
      title: "Inspirer du début à la fin",
      description: "Créez et gérez une variété de conférences (keynotes, présentations, espaces partenaires, tours thématiques, ateliers). On développe un style de présentation personnalisé.",
      secondaryText: "Offrez une expérience engageante à vos participants en leur donnant les moyens de s'impliquer via une vidéo interactive.",
      imageSrc: "/images/feature-inspire.jpg"
    },
    {
      id: 2,
      title: "Mettre vos speakers en avant",
      description: "Sur place ou en ligne, votre conférencier le gestion de vos intervenants est simplifiée ! ",
      secondaryText: "Faites gagner du temps et du confort à vos speakers en leur permettant de partager au préalable ou sur place leurs présentations.",
      tertiaryText: "Live intervenants en live en ligne ? Aucun souci, grâce à nos liens directs pour vos speakers (pas besoin de téléchargement, ni d'installation...)",
      imageSrc: "/images/feature-speakers.jpg"
    },
    {
      id: 3,
      title: "Optimiser le suivi en temps réel",
      description: "Mesurez et suivez vos données avant, pendant et après l'événement pour prendre les meilleures décisions.",
      secondaryText: "Nombre de participants personnalisés, taux de fréquentation... grâce à des rapports de précision sur les activités, faites ressortir les rapports statistiques les détaillés pour une prise de décision facilitée pour vous et vos participants. Des données précieuses pour votre prochaine édition !",
      imageSrc: "/images/feature-analytics.jpg"
    }
  ];

  return (
    <div ref={sectionRef} className="bg-gray-900 text-white py-10 pb-20">
      <div className="container mx-auto px-6">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.id} className="feature-item flex flex-col md:flex-row md:items-center gap-8">
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -left-3 -top-3 w-20 h-20 bg-amber-500 rounded-full opacity-20"></div>
                      <Image 
                        src={feature.imageSrc} 
                        alt={feature.title} 
                        width={540} 
                        height={360} 
                        className="rounded-lg relative z-10 shadow-xl border-4 border-gray-800" 
                      />
                      <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-amber-500 rounded-full opacity-20"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-amber-400">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                    {feature.secondaryText && <p className="text-gray-400">{feature.secondaryText}</p>}
                    {feature.tertiaryText && <p className="text-gray-400">{feature.tertiaryText}</p>}
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-amber-400">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                    {feature.secondaryText && <p className="text-gray-400">{feature.secondaryText}</p>}
                    {feature.tertiaryText && <p className="text-gray-400">{feature.tertiaryText}</p>}
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -left-3 -top-3 w-20 h-20 bg-amber-500 rounded-full opacity-20"></div>
                      <Image 
                        src={feature.imageSrc} 
                        alt={feature.title} 
                        width={540} 
                        height={360} 
                        className="rounded-lg relative z-10 shadow-xl border-4 border-gray-800" 
                      />
                      <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-amber-500 rounded-full opacity-20"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}