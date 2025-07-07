import React from "react";
import { motion } from "framer-motion";

function Stats() {
  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="row align-items-center">
        {/* 📝 Left Text Section */}
        <motion.div
          className="col-12 col-md-6 mb-5 mb-md-0 px-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="fs-2 fw-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trust with confidence
          </motion.h2>

          {[
            {
              title: "Customer-first always",
              text:
                "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments.",
            },
            {
              title: "No spam or gimmicks",
              text:
                'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
            },
            {
              title: "The Zerodha universe",
              text:
                "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
            },
            {
              title: "Do better with money",
              text:
                "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
            },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <motion.h4
                className="fs-5 fw-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {item.title}
              </motion.h4>
              <motion.p
                className="text-muted"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.text}
              </motion.p>
            </div>
          ))}
        </motion.div>

        {/* 🖼️ Right Image & Links Section */}
        <motion.div
          className="col-12 col-md-6 px-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#"
              className="mx-3 text-decoration-none fw-semibold"
            >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Stats;
