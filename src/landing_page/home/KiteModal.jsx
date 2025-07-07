import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import './Kite.css';

function KiteModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Show on first app load
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="kite-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="kite-modal-template text-center position-relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close icon */}
            <button className="kite-close-icon" onClick={() => setShowModal(false)}>
              <FiX size={24} />
            </button>

            {/* Logo or GIF */}
            <img
              src="/media/images/kite-logo.svg"
              alt="Kite App"
              className="img-fluid kite-modal-img"
            />

            {/* Text content */}
            <h4 className="fw-bold mb-2 text-dark">🚀 Kite App by Kapil</h4>
            <p className="text-muted mb-3 px-3">
              A lightning-fast, minimal stock trading experience – built by you, for you.
            </p>

            {/* CTA */}
            <a
              href="https://zerodhaclone-t0lx.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
            >
              🔍 Preview App
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default KiteModal;
