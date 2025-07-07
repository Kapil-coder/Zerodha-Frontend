import React from 'react';
import { motion } from 'framer-motion';

function LeftSection({
  imageUrl,
  ProductTitle,
  ProductDes,
  tryDemo,
  learnMore,
  playStore,
  appleStore
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center flex-column-reverse flex-lg-row">
        
        {/* Text Content */}
        <motion.div
          className="col-lg-6 col-md-12 mt-4 mt-lg-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-3">{ProductTitle}</h2>
          <p className="text-muted">{ProductDes}</p>

          <div className="mt-4 d-flex flex-wrap gap-3">
            <a href={tryDemo} className="btn btn-outline-primary">Try Demo</a>
            <a href={learnMore} className="btn btn-outline-secondary">Learn more</a>
          </div>

          <div className="mt-4 d-flex align-items-center flex-wrap gap-3">
            <a href={playStore}>
              <img src="/media/images/googlePlayBadge.svg" style={{ height: "40px" }} alt="Google Play" />
            </a>
            <a href={appleStore}>
              <img src="/media/images/appstoreBadge.svg" style={{ height: "40px" }} alt="App Store" />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="col-lg-6 col-md-12 text-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={imageUrl}
            alt="product"
            className="img-fluid"
            style={{ maxWidth: '400px' }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default LeftSection;
