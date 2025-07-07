import React from 'react';
import { motion } from 'framer-motion';

function Bockrage() {
  return (
    <div className="container my-5">
      {/* 💰 Section 1: Account Opening Charges */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-secondary mb-4 border-bottom pb-2">
           Charges for Account Opening
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped text-muted">
            <thead className="table-light">
              <tr>
                <th>Type of Account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td><span className="badge bg-success px-3 py-2 fs-6">FREE</span></td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td><span className="badge bg-success px-3 py-2 fs-6">FREE</span></td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹500</td>
              </tr>
              <tr>
                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td>₹500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* 🛠️ Section 2: Platform Services & Subscriptions */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-secondary mb-4 border-bottom pb-2">
          Platform Services & Subscriptions
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped text-muted">
            <thead className="table-light">
              <tr>
                <th>Service</th>
                <th>Billing Frequency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td><span className="text-success">Free</span>: ₹0 <br /> <span className="text-primary">Pro</span>: ₹249 / ₹2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per Transaction</td>
                <td>Buy & Invest More: ₹100<br />SIP: ₹10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: ₹500<br />Historical: ₹500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default Bockrage;
