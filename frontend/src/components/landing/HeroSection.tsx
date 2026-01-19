import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./LandingStyles.css";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-grid" />
        <div className="hero-bg-particles" />
      </div>
      <div className="hero-content">
        <motion.h1 
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Intelligent Traffic Sign Detection
        </motion.h1>
        <motion.p 
          className="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Powered by advanced CNN models and ONNX runtime for real-time, accurate classification of traffic signs. Enhance road safety with AI-driven insights.
        </motion.p>
        <motion.div 
          className="hero-cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button
            className="hero-cta primary"
            onClick={() => navigate("/app")}
            aria-label="Get Started with Drive Detect"
          >
            Get Started
          </button>
          <a
            className="hero-cta secondary"
            href="https://github.com/adityamangal1/Drive-Detect"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
