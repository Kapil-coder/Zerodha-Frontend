import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="container py-5">
      {/* 🔠 Typewriter Headline */}
      <motion.div
        className="row mt-3 mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="fs-2 fw-bold text-center text-dark">
          <Typewriter
            options={{
              strings: [
                "We pioneered the discount broking model in India.",
                "Now, we are breaking ground with our technology."
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              pauseFor: 2000,
            }}
          />
        </h1>
      </motion.div>

      {/* 🧾 Description Columns */}
      <motion.div
        className="row border-top pt-5 text-muted fs-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Left Column */}
        <motion.div
          className="col-12 col-md-6 mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India
            in terms of cost, support, and technology. We named the company
            <strong> Zerodha</strong>, a combination of Zero and "Rodha", the
            Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over <strong>1.6+ crore clients</strong> place billions of orders
            every year through our powerful ecosystem of investment platforms,
            contributing over 15% of all Indian retail trading volumes.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="col-12 col-md-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <strong>Rainmatter</strong>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
