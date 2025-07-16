import React, { useState } from 'react';
import './Contact.css';
import Button from './Button';
import Card from './Card';

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
    <Card className="contact-section" id="contact" tabIndex={-1}>
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
        <Button type="submit" disabled={submitted} style={{ width:'100%', marginTop:7, borderRadius:10, fontWeight:800, fontSize:'1.14rem' }}>
          {submitted ? 'Message Sent!' : 'Send Message'}
        </Button>
        {submitted && (
          <div className="contact-thankyou">
            Thank you! We&apos;ll be in touch soon.
          </div>
        )}
      </form>
    </Card>
  );
}

export default Contact;
