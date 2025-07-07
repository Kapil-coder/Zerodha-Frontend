import React from 'react'
import { motion } from 'framer-motion'

function Awards() {
  return (
    <motion.div
      className='container py-5'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='row align-items-center'>

        {/* Left Image */}
        <motion.div
          className='col-12 col-md-6 mb-4 mb-md-0 text-center'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img src='media/images/largestBroker.svg' alt='Award Image' className='img-fluid' />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className='col-12 col-md-6'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Largest broker in India
          </motion.h1>

          <motion.p
            className='mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India
          </motion.p>

          <div className='row'>
            <div className='col-6'>
              <motion.ul
                className='list-unstyled'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </motion.ul>
            </div>
            <div className='col-6'>
              <motion.ul
                className='list-unstyled'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <li><p>Stockes and IPO's</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </motion.ul>
            </div>
          </div>

          <motion.img
            src='media/images/pressLogos.png'
            alt='Press'
            className='img-fluid mt-4'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Awards
