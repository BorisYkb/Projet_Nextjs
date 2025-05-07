import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/FeaturesList";
import Support from "../components/Support";

import data from "../../data/services/plateforme.json";

const PlateformePage = () => {
  return (
    <main className="bg-white">
      <HeroSection data={data.heroSection} />
      <Features data={data.features} />
      <Support data={data.support} />
    </main>
  );
};

export default PlateformePage;
