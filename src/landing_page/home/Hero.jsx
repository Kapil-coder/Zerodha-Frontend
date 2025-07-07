import React from 'react';
import { motion } from 'framer-motion';

import KiteModal from './KiteModal';

function Hero() {
  return (
    <>
      {/* Kite App Preview Card */}
      <div className="pt-4">
        <KiteModal />
        
      </div>

      {/* Hero Section */}
      <motion.div
        className="container p-4 p-md-5 mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="row justify-content-center text-center">
          {/* Hero Image */}
          <motion.img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxHeight: "300px", objectFit: "contain" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Headline */}
          <motion.h1
            className="mt-3 fw-bold"
            style={{ fontSize: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Invest in everything
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-muted px-2 px-md-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Online platform to invest in stocks, derivatives, mutual funds, and more.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn btn-primary px-4 py-2 fs-5">
              Signup Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
