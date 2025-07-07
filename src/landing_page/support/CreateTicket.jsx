import React from "react";
import { motion } from "framer-motion";

function CreateTicket() {
  const ticketTopics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started"
  ];

  return (
    <div className="container my-5">
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="fs-3 fw-bold">To create a ticket, select a relevant topic</h1>
      </motion.div>

      <div className="row">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="col-lg-4 col-md-6 col-12 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="mb-3 text-primary">
                <i className="fa fa-plus-circle me-2"></i> Account Opening
              </h5>

              {ticketTopics.map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="d-block text-decoration-none text-muted mb-2 small"
                  style={{ lineHeight: "1.8" }}
                >
                  {text}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
