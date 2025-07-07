import React from 'react';
import { motion } from 'framer-motion';

function Pricing() {
  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <motion.h1
            className="mb-4 fs-2 fw-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Unbeatable pricing
          </motion.h1>

          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </motion.p>

          <motion.a
            href="#"
            className="fw-semibold text-decoration-none mt-3 d-inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            See pricing <i className="fa-solid fa-arrow-right ms-1"></i>
          </motion.a>
        </div>

        {/* Spacer for large screen layout (optional) */}
        <div className="d-none d-md-block col-md-1"></div>

        {/* Right Pricing Cards */}
        <div className="col-12 col-md-6">
          <div className="row g-3">
            <motion.div
              className="col-12 col-sm-6 p-4 border rounded text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className="mb-3 text-primary">&#8377;0</h1>
              <p className="mb-0">
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </motion.div>

            <motion.div
              className="col-12 col-sm-6 p-4 border rounded text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1 className="mb-3 text-success">&#8377;20</h1>
              <p className="mb-0">
                Intraday and
                <br />
                F&amp;O
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Pricing;
