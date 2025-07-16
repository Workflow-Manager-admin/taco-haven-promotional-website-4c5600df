import React, { useState } from 'react';
import './Contact.css';

/**
 * Contact form allowing visitors to send inquiries.
 * Modern, accessible, taqueria-themed style.
 */
// PUBLIC_INTERFACE
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purpose only: show success; in real app, call backend API here!
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section card" id="contact" tabIndex={-1}>
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        Got questions, feedback, or want to place a special order? We&apos;d love to hear from you!
      </p>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="input-group">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder="What's on your mind?"
            value={form.message}
            onChange={handleChange}
            rows={4}
          ></textarea>
        </div>
        <button className="btn" type="submit" disabled={submitted}>
          {submitted ? 'Message Sent!' : 'Send Message'}
        </button>
        {submitted && (
          <div className="contact-thankyou">
            Thank you! We&apos;ll be in touch soon.
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;
