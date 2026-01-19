import React from "react";

import "./components/landing/LandingStyles.css";
import HeroSection from "./components/landing/HeroSection";
import AboutSection from "./components/landing/AboutSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import OpenSourceSection from "./components/landing/OpenSourceSection";
import Footer from "./components/landing/Footer";

const LandingPage: React.FC = () => {
  return (
    <main className="landing-root">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <OpenSourceSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
