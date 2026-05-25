import React from 'react';
import './Contact.css';

const Contact = () => {
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  return (
    <section id="contact" className="section-shell contact">
      <p className="eyebrow">Contact</p>

      <div className="contact-grid">
        <div className="contact-panel contact-form-panel">
          <div className="panel-head">
            <h3>Contact Form</h3>
            <p className="form-intro-title">Let&apos;s build something great together.</p>
            <p className="form-intro-text">
              Send me a direct message for collaborations, freelance work, or full-time opportunities.
            </p>
          </div>

          <form action={formEndpoint || undefined} method="POST" className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your full name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project, timeline, or opportunity..."
              required
            />

            <p className="form-context">
              <span className="checkmark-badge" aria-hidden="true">✓</span>
              Send a message and I&apos;ll respond as soon as possible. The more detail you share, the better I can help.
            </p>

            <button type="submit" disabled={!formEndpoint}>
              {formEndpoint ? 'Send Message' : 'Connect Formspree First'}
            </button>
          </form>

          {!formEndpoint && (
            <p className="contact-note">
              Add <code>VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id</code> in your <code>.env</code> file.
            </p>
          )}
        </div>

        <aside className="contact-panel contact-details-panel">
          <div className="panel-head">
            <h3>Contact Details</h3>
            <p>
              <span className="details-lead">Open to serious conversations and good product work.</span>
              If you are hiring, planning a redesign, or need a frontend engineer who cares about product quality,
              <span className="details-tail">this is the fastest way to reach me.</span>
            </p>
          </div>

          <div className="contact-details" role="list" aria-label="Contact details">
            <article className="detail-item" role="listitem">
              <div className="detail-head">
                <span className="detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>
                <p className="detail-label">Location</p>
              </div>
              <p className="detail-value">Lagos, Nigeria</p>
            </article>

            <article className="detail-item" role="listitem">
              <div className="detail-head">
                <span className="detail-icon detail-icon-email" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation" fill="none">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="2" />
                    <path d="M5.5 8l6.5 4.5L18.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="detail-label">Email</p>
              </div>
              <a className="detail-link" href="mailto:misturaaaishola@gmail.com">misturaaaishola@gmail.com</a>
            </article>

            <article className="detail-item" role="listitem">
              <div className="detail-head">
                <span className="detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1 .33 2 .5 3.1.5a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.2 21 3 13.8 3 4.9a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.1.2 2.1.5 3.1a1 1 0 0 1-.25 1l-2.15 1.8Z" />
                  </svg>
                </span>
                <p className="detail-label">Phone</p>
              </div>
              <a className="detail-link" href="tel:+2348081202521">+234 808 120 2521</a>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
