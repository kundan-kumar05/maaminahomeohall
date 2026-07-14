import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { GiMedicalPackAlt } from 'react-icons/gi';
import './Contact.css';

const contactDetails = [
  {
    icon: FiMapPin,
    label: 'Our Location',
    value: 'Maa Mina Homeo Hall, Main Road, Darbhanga, Bihar — 846004',
    color: '#2E8B57',
    href: 'https://maps.google.com',
  },
  {
    icon: FiPhone,
    label: 'Phone Number',
    value: '+91 98765 43210',
    color: '#4FC3F7',
    href: 'tel:+919876543210',
  },
  {
    icon: FiMail,
    label: 'Email Address',
    value: 'info@maaminahomeo.com',
    color: '#EC407A',
    href: 'mailto:info@maaminahomeo.com',
  },
  {
    icon: FiClock,
    label: 'Clinic Hours',
    value: 'Mon–Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 2:00 PM',
    color: '#F57C00',
    href: null,
  },
];

const Contact = ({ onBookAppointment }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <GiMedicalPackAlt /> Get In Touch
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Visit or <span>Contact Us</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            We're here to help. Reach out to us for appointments, queries, or any
            health-related concerns.
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* Info Cards */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <div className="contact-cards">
              {contactDetails.map((d, i) => (
                <div
                  key={d.label}
                  className="contact-detail-card"
                  style={{ '--c-color': d.color }}
                >
                  <div className="c-icon">
                    <d.icon />
                  </div>
                  <div className="c-content">
                    <p className="c-label">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="c-value link">
                        {d.value}
                      </a>
                    ) : (
                      <p className="c-value" style={{ whiteSpace: 'pre-line' }}>{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              className="contact-cta-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="cta-card-content">
                <GiMedicalPackAlt className="cta-card-icon" />
                <div>
                  <h3>Ready to start healing?</h3>
                  <p>Book your consultation with our expert homeopaths today.</p>
                </div>
              </div>
              <button className="btn btn-primary" onClick={onBookAppointment} id="contact-book-btn">
                Book Appointment
              </button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="contact-map-col"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            <div className="map-wrapper">
              <iframe
                title="Maa Mina Homeo Hall Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114624.49703498946!2d85.84374!3d26.152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed6f77b00000ab%3A0x9b9a4567a1b6c6e5!2sDarbhanga%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
