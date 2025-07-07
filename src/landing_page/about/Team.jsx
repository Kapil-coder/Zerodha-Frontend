import React from "react";
import { motion } from "framer-motion";

function Team() {
  return (
    <div className="container py-5">
      {/* 🔹 Section Heading */}
      <motion.div
        className="row mb-4 border-top pt-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-center fw-bold">People</h2>
      </motion.div>

      {/* 👤 Profile Section */}
      <motion.div
        className="row align-items-center text-muted"
        style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      >
        {/* 📸 Image + Name */}
        <motion.div
          className="col-12 col-md-5 text-center mb-4 mb-md-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle shadow"
            style={{ width: "60%", maxWidth: "250px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h4 className="mt-3 fw-semibold">Nithin Kamath</h4>
          <h6 className="text-secondary">Founder, CEO</h6>
        </motion.div>

        {/* 📝 Text Content */}
        <motion.div
          className="col-12 col-md-7 px-4"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Nithin bootstrapped and founded <strong>Zerodha</strong> in 2010 to overcome
            the hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has revolutionized the Indian broking industry.
          </p>
          <p>
            He is a member of the <strong>SEBI Secondary Market Advisory Committee (SMAC)</strong>
            and the <strong>Market Data Advisory Committee (MDAC)</strong>.
          </p>
          <p>Playing basketball is his zen.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Team;
