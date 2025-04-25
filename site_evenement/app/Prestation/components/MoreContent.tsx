"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

interface MoreContentProps {
  isLoaded: boolean;
}

export default function MoreContent({ isLoaded }: MoreContentProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isLoaded && sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.content-card');

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, [isLoaded]);

  const relatedContent = [
    {
      id: 1,
      title: "Découvrez le succès story Arkea",
      image: "/content/arkea.jpg",
      category: "Success Story",
      link: "/case-studies/arkea",
    },
    {
      id: 2,
      title: "Le guide pour organiser une conférence en 14 étapes",
      image: "/content/guide.jpg",
      category: "Guide pratique",
      link: "/resources/conference-guide",
    },
    {
      id: 3,
      title: "Pourquoi le webinaire sauve Medison",
      image: "/content/webinar.jpg",
      category: "Témoignage client",
      link: "/case-studies/medison",
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Vous aimerez aussi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedContent.map((item) => (
            <Link key={item.id} href={item.link} className="block content-card">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
