import React from "react";
import { motion } from "framer-motion";
import "./LandingStyles.css";

const features = [
  {
    title: "Real-Time Detection",
    desc: "Instantly classify traffic signs with high accuracy using optimized CNN models.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#E0F2FE" stroke="#2563EB" strokeWidth="2" />
        <path d="M24 12v12" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="31" r="3" fill="#2563EB" />
      </svg>
    ),
    animClass: "bento-detect"
  },
  {
    title: "ONNX Compatibility",
    desc: "Cross-platform inference with ONNX runtime for seamless deployment anywhere.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="8" fill="#F0F9FF" stroke="#6366F1" strokeWidth="2" />
        <path d="M16 24h16" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="#6366F1" />
      </svg>
    ),
    animClass: "bento-onnx"
  },
  {
    title: "Open Source & Transparent",
    desc: "Fully open-source code with PyTorch training scripts for community collaboration.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="12" y="16" width="24" height="16" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
        <path d="M24 16v-6" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="27" r="3" fill="#10B981" />
      </svg>
    ),
    animClass: "bento-open"
  },
  {
    title: "High Performance",
    desc: "Optimized for speed and efficiency, trained on 39,209 diverse traffic sign images.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <ellipse cx="24" cy="24" rx="18" ry="12" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
        <path d="M12 24h24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 12v24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    animClass: "bento-perf"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <motion.h2 
        className="features-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h2>
      <div className="bento-grid">
        {features.map((f, i) => (
          <motion.div
            className={`bento-card ${f.animClass}`}
            key={f.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            tabIndex={0}
            aria-label={f.title}
          >
            <motion.div 
              className="bento-icon"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {f.icon}
            </motion.div>
            <div className="bento-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
