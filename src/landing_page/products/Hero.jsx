import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="container border-bottom py-5">
      <motion.div
        className="row justify-content-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="col-lg-8 px-3">
          <motion.h1
            className="fw-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Zerodha Products
          </motion.h1>

          <motion.h4
            className="text-muted mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Sleek, modern, and intuitive trading platforms
          </motion.h4>

          <motion.p
            className="mt-3 fs-6 text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Check out our investment offerings →
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
