// app/conference/page.tsx
"use client";

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import Support from './components/Support';
import Functionalities from './components/Functionalities';
import MoreContent from './components/MoreContent';
import CallToAction from './components/CallToAction';

export default function ConferencePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection isLoaded={isLoaded} />

      {/* Value Proposition */}
      <ValueProposition isLoaded={isLoaded} />

      {/* Features */}
      <Features isLoaded={isLoaded} />

      {/* Support Section */}
      <Support isLoaded={isLoaded} />

      {/* Functionalities */}
      <Functionalities isLoaded={isLoaded} />

      {/* Call To Action */}
      <CallToAction isLoaded={isLoaded} />

      {/* Related Content */}
      <MoreContent isLoaded={isLoaded} />
    </main>
  );
}