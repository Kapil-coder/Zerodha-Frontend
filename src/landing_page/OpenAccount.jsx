import React from 'react';
import { motion } from 'framer-motion';

function OpenAccount() {
  return (
    <motion.div
      className="container py-5 mb-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="row justify-content-center text-center">

        <div className="col-12 col-md-10 col-lg-8">
          <motion.h2
            className="fw-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Open a Zerodha account
          </motion.h2>

          <motion.p
            className="mb-4 text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </motion.p>

          <motion.button
            className="btn btn-primary btn-lg px-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Sign up for free
          </motion.button>
        </div>
        
      </div>
    </motion.div>
  );
}

export default OpenAccount;
