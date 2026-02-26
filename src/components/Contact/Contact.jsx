import { useState, useRef } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

// EmailJS credentials
const EMAIL_SERVICE  = 'service_bj5cs1o';
const EMAIL_TEMPLATE = 'template_9reig0p';
const EMAIL_KEY      = '3UD08ZW2dFNGohkr1';

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status,   setStatus]   = useState(''); // '' | 'sending' | 'success' | 'error'

  // Update form state when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send email via EmailJS, then reset form
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(EMAIL_SERVICE, EMAIL_TEMPLATE, form.current, EMAIL_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Contactez-moi</h2>

        <div className="contact-content">

          {/* LEFT — contact info cards */}
          <div className="contact-info" data-aos="fade-right">

            <div className="info-card neon-card">
              <div className="info-icon">
                <FaEnvelope size={40} color="var(--neon-green)" />
              </div>
              <h3>Email</h3>
              <a href="mailto:nisoudev@gmail.com">nisoudev@gmail.com</a>
            </div>

            <div className="info-card neon-card">
              <div className="info-icon">
                <FaGithub size={40} color="var(--neon-green)" />
              </div>
              <h3>GitHub</h3>
              <a href="https://github.com/Nesrine-blip" target="_blank" rel="noopener noreferrer">
                @Nesrine-blip
              </a>
            </div>

          </div>

          {/* RIGHT — contact form */}
          <div className="contact-form-wrapper" data-aos="fade-left">
            <form ref={form} className="contact-form neon-card" onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="neon-button"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {/* Feedback messages */}
              {status === 'success' && (
                <p className="success-message neon-text">✅ Message envoyé avec succès !</p>
              )}
              {status === 'error' && (
                <p style={{ color: '#ff4444', textAlign: 'center', marginTop: '20px', fontWeight: '600' }}>
                  Erreur lors de l'envoi. Écrivez directement à nisoudev@gmail.com
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;