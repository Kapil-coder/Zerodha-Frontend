import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="row align-items-center gy-5">
        {/* Left Image */}
        <motion.div
          className="col-12 col-md-6 text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: '75%' }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="col-12 col-md-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-3 fs-2 fw-bold">Free and open market education</h2>

          <p className="text-muted">
            <strong>Varsity</strong> — the largest online stock market education book in the world, covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="fw-semibold text-decoration-none">
            Explore Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <p className="mt-4 text-muted">
            <strong>TradingQ&A</strong> — India’s most active trading and investment community for all your market-related queries.
          </p>
          <a href="#" className="fw-semibold text-decoration-none">
            Visit TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Education;
