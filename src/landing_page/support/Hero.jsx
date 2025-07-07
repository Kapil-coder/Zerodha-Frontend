import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="container-fluid"
      id="supportHero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* 🔷 Top Support Header */}
      <motion.div
        className="p-5"
        id="supportWrapper"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </motion.div>

      {/* 🔹 Main Content */}
      <motion.div
        className="row p-5 mx-5"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column */}
        <motion.div
          className="col-md-6 p-3"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            placeholder="Eg. how do I activate F&O"
            className="mb-3"
          />
          <br />
          <a href="#">Track account opening</a><br />
          <a href="#">Track segment activation</a><br />
          <a href="#">Intraday margins</a><br />
          <a href="#">Kite user manual</a>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="col-md-6 p-3"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fs-3 mb-4">Featured</h2>
          <ol className="fs-6">
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
