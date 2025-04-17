"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
    const titleRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Marquer que nous sommes côté client
        setIsClient(true);

        if (titleRef.current) {
            // Animation du titre après le premier rendu
            const tl = gsap.timeline();

            // Séparer les deux parties du titre pour les animer indépendamment
            tl.fromTo(".title-part-1",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
            );

            tl.fromTo(".title-part-2",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
                "-=0.8"
            );

            tl.fromTo(".subtitle",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.8"
            );
        }
    }, []);

    return (
        <div className="py-30 bg-gray-100 dark:bg-gray-700 pt-40">
            <div ref={titleRef} className="container mx-auto px-4 text-center">
                {/* Titre principal avec dégradé de couleur */}
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-center">
                        <span className="title-part-2 flex justify-center items-center text-5xl md:text-6xl lg:text-7xl font-bold ${!isClient ? 'opacity-100' : 'opacity-0'}">
                            <span className="text-gray-900 dark:text-white">Nos</span>
                            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-yellow-400 text-transparent bg-clip-text ml-4">événements</span>
                        </span>
                    </h1>

                    {/* Sous-titre */}
                    <div className="subtitle mt-12 max-w-4xl mx-auto ${!isClient ? 'opacity-100' : 'opacity-0'}">
                        <p className="text-base md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                            <span className='font-bold'>Chez Eventmaker, les événements nous font vibrer peu importe leurs formats.</span>
                            Rencontrons-nous et faisons connaissances sur un des événements auquel nous participons à travers le monde
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}