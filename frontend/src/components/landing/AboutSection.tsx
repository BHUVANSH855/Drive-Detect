import React from "react";
import { motion } from "framer-motion";
import "./LandingStyles.css";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <motion.div 
        className="about-split"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="about-text">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What is Drive Detect?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Drive Detect leverages Convolutional Neural Networks (CNN) trained on extensive traffic sign datasets to provide accurate, real-time classification. Built with PyTorch and exported to ONNX for cross-platform compatibility, it ensures fast inference without compromising on precision.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our mission: democratize AI for road safety, making advanced detection accessible to developers, researchers, and everyday users.
          </motion.p>
        </div>
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Enhanced technical visual: animated traffic sign with data flow */}
          <svg width="200" height="160" viewBox="0 0 200 160" fill="none" aria-hidden="true">
            <motion.rect 
              x="50" y="50" width="100" height="60" rx="12" 
              fill="#F3F6FA" stroke="#2563EB" strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.circle 
              cx="100" cy="80" r="20" 
              fill="#E0F2FE" stroke="#2563EB" strokeWidth="3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.path 
              d="M100 40v-20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            />
            <motion.path 
              d="M100 100v20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            />
            <motion.path 
              d="M70 80H30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              viewport={{ once: true }}
            />
            <motion.path 
              d="M130 80h40" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              viewport={{ once: true }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
