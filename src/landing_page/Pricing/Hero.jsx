import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container py-5">
      {/* 🔹 Heading */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>Charges</h1>
        <h5 className="text-muted mt-2">List of all charges and taxes</h5>
      </motion.div>

      {/* 🔸 Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <motion.div
          className="col-12 col-md-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="p-4 border rounded-4 h-100 shadow-sm hover-shadow transition">
            <img
              src="/media/images/pricing0.svg"
              alt="Equity Delivery"
              className="mb-3"
              style={{ maxHeight: "100px" }}
            />
            <h4 className="fw-semibold">Free equity delivery</h4>
            <p className="text-muted mt-2">
              All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="col-12 col-md-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-4 border rounded-4 h-100 shadow-sm hover-shadow transition">
            <img
              src="/media/images/intradayTrades.svg"
              alt="Intraday Trades"
              className="mb-3"
              style={{ maxHeight: "100px" }}
            />
            <h4 className="fw-semibold">Intraday and F&O trades</h4>
            <p className="text-muted mt-2">
              Flat ₹20 or 0.03% (whichever is lower) per executed order across intraday, currency, and commodities.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="col-12 col-md-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-4 border rounded-4 h-100 shadow-sm hover-shadow transition">
            <img
              src="/media/images/pricing0.svg"
              alt="Free MF"
              className="mb-3"
              style={{ maxHeight: "100px" }}
            />
            <h4 className="fw-semibold">Free direct MF</h4>
            <p className="text-muted mt-2">
              All direct mutual fund investments are completely free — ₹0 commissions & DP charges.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
