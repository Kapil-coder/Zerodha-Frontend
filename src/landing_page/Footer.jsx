import React from "react";

function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container mt-5">
        <div className="row mt-5">

          {/* Logo and Info */}
          <div className="col-md-6 col-lg-3">
            <img src="/media/images/logo.svg" alt="Zerodha Logo" style={{ width: "130px" }} />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Account Section */}
          <div className="col-md-6 col-lg-3">
            <p className="fw-bold">Account</p>
            {[
              "Open demat account",
              "Minor demat account",
              "NRI demat account",
              "Commodity",
              "Dematerialisation",
              "Fund transfer",
              "MTF",
              "Referral program",
            ].map((item, i) => (
              <a href="#" key={i} className="d-block text-muted mb-1 text-decoration-none">
                {item}
              </a>
            ))}
          </div>

          {/* Company Section */}
          <div className="col-md-6 col-lg-3">
            <p className="fw-bold">Company</p>
            {[
              "About",
              "Philosophy",
              "Press & media",
              "Careers",
              "Zerodha Cares (CSR)",
              "Zerodha.tech",
              "Open source",
            ].map((item, i) => (
              <a href="#" key={i} className="d-block text-muted mb-1 text-decoration-none">
                {item}
              </a>
            ))}
          </div>

          {/* Support Section */}
          <div className="col-md-6 col-lg-3">
            <p className="fw-bold">Support</p>
            {["Open a account", "Fund transfer", "60 Challenge"].map((item, i) => (
              <a href="#" key={i} className="d-block text-muted mb-1 text-decoration-none">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-muted mt-5" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238.
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For any complaints please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, DP issues to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please read the SEBI Risk Disclosure Document carefully.
          </p>
          <p>
            Attention investors: Only pledge via depositories is accepted as margin. Ensure your broker details are up to date. Stay informed via NSDL/CDSL statements. Verify trades via mobile/email alerts from exchanges.
          </p>
          <p>
            As a policy, we do not offer stock tips or advisory. If you encounter any impersonation, please create a support ticket.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
