import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./LandingStyles.css";

const GITHUB_URL = "https://github.com/adityamangal1/Drive-Detect";

const OpenSourceSection: React.FC = () => {
  const starsRef = useRef<HTMLSpanElement>(null!);
  const forksRef = useRef<HTMLSpanElement>(null!);
  const contributorsRef = useRef<HTMLSpanElement>(null!);
  const isInView = useInView(starsRef, { once: true });

  // Animate count-up for stats
  useEffect(() => {
    if (!isInView) return;
    const animateCount = (ref: React.RefObject<HTMLSpanElement>, target: number) => {
      if (!ref.current) return;
      const duration = 1500;
      const step = (timestamp: number, startTime: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        ref.current!.textContent = value.toString();
        if (progress < 1) {
          requestAnimationFrame((t) => step(t, startTime));
        } else {
          ref.current!.textContent = target.toString();
        }
      };
      requestAnimationFrame((t) => step(t, t));
    };
    animateCount(starsRef, 850);
    animateCount(forksRef, 120);
    animateCount(contributorsRef, 25);
  }, [isInView]);

  return (
    <section className="opensource-section">
      <motion.div 
        className="opensource-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Open Source & Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Drive Detect is fully open source, built with PyTorch and ONNX. Join our community to contribute, improve, and innovate in AI-driven road safety.
        </motion.p>
        <motion.div 
          className="opensource-stats-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="opensource-stat">
            <span ref={starsRef} className="stat-number">0</span>
            <span className="stat-label">Stars</span>
          </div>
          <div className="opensource-stat">
            <span ref={forksRef} className="stat-number">0</span>
            <span className="stat-label">Forks</span>
          </div>
          <div className="opensource-stat">
            <span ref={contributorsRef} className="stat-number">0</span>
            <span className="stat-label">Contributors</span>
          </div>
        </motion.div>
        <motion.a
          className="opensource-cta"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contribute on GitHub"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contribute on GitHub
        </motion.a>
      </motion.div>
    </section>
  );
};

export default OpenSourceSection;
