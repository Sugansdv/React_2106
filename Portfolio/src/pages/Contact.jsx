import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (demo only)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-4">
      <h2 className="text-center text-primary mb-4">Contact Me</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit}
            className="row g-3 shadow p-4 rounded bg-light"
          >
            <div className="col-12">
              <label className="form-label">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Your message..."
              />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-4">
                Send Message
              </button>
            </div>
          </form>

          {/* Social Media Icons */}
          <div className="text-center mt-4">
            <h5 className="mb-3">Connect me</h5>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-dark fs-4 mx-2"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-primary fs-4 mx-2"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="mailto:suganyasdv16@example.com"
              className="text-danger fs-4 mx-2"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
