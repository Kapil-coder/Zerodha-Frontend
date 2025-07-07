import React, { useState } from "react";


function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    // You can post to your API here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="text-center mb-4">
          <img src="\media\images\logo.svg" alt="Zerodha Logo" style={{ width: "110px" }} />
          <h4 className="mt-2">Create your Zerodha Account</h4>
          <p className="text-muted small">Start your investment journey now.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-control"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Signup;
