import React from "react";
import { motion } from "framer-motion";

function RightSection({ imageUrl, ProductTitle, ProductDes, learnMore }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center flex-column-reverse flex-lg-row">
        
        {/* Image Section */}
        <motion.div
          className="col-lg-6 col-md-12 text-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={imageUrl}
            alt="product"
            className="img-fluid"
            style={{ maxWidth: "400px", padding: "20px" }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="col-lg-6 col-md-12 mt-4 mt-lg-0 px-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-3">{ProductTitle}</h2>
          <p className="text-muted">{ProductDes}</p>
          <a
            href={learnMore}
            className="text-primary fw-semibold text-decoration-none"
          >
            Learn more →
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default RightSection;
