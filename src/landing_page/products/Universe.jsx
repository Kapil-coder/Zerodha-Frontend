import React from "react";
import { motion } from "framer-motion";

function Universe() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const platforms = [
    {
      src: "/media/images/zerodhaFundhouse.png",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
    },
    {
      src: "/media/images/streakLogo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
      src: "/media/images/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
      src: "/media/images/sensibullLogo.svg",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
    },
    {
      src: "/media/images/dittoLogo.png",
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free."
    },
    {
      src: "/media/images/goldenpiLogo.png",
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    }
  ];

  return (
    <div className="container my-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="fw-bold">The Zerodha Universe</h2>
        <p className="fs-5 text-muted mt-3 mb-5">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </motion.div>

      <div className="row text-center">
        {platforms.map((item, index) => (
          <motion.div
            key={index}
            className="col-md-4 col-sm-6 col-12 mb-5"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              alt={`Platform-${index}`}
              className="mb-3"
              style={{ maxWidth: "60%" }}
            />
            <p className="text-muted small px-3">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="btn btn-primary px-4 py-2 fs-5">
          Sign up for free
        </button>
      </motion.div>
    </div>
  );
}

export default Universe;
