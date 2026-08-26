import logo from '../assets/logo.png';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const quickLinks = ['Home', 'About', 'Doctors', 'Treatments', 'Testimonials', 'Contact'];
const treatments = ['Paralysis', 'Skin Diseases', 'Arthritis', 'Infant Diseases', 'Diabetes', 'Blood Pressure'];

const Footer = ({ onBookAppointment }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Maa Mina Homeo Hall" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Providing trusted, safe, and effective homeopathic healthcare to families
              across Bihar since years. Natural healing for a healthier life.
            </p>
            <div className="footer-social">
              {[
                { icon: FiFacebook, href: '#', label: 'Facebook' },
                { icon: FiInstagram, href: '#', label: 'Instagram' },
                { icon: FiTwitter, href: '#', label: 'Twitter' },
                { icon: FiYoutube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="social-link" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="footer-link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="footer-col">
            <h4 className="footer-heading">Treatments</h4>
            <ul className="footer-links">
              {treatments.map((t) => (
                <li key={t}>
                  <a href="#treatments" className="footer-link">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact-list">
              <a href="https://maps.google.com" className="footer-contact-item">
                <FiMapPin className="fc-icon" />
                <span>Main Road, Darbhanga,<br />Bihar — 846004</span>
              </a>
              <a href="tel:+919135363590" className="footer-contact-item">
                <FiPhone className="fc-icon" />
                <span>+91 9135363590</span>
              </a>
              <a href="mailto:info@maaminahomeo.com" className="footer-contact-item">
                <FiMail className="fc-icon" />
                <span>info@maaminahomeo.com</span>
              </a>
            </div>
            <button
              className="btn btn-primary footer-book-btn"
              onClick={onBookAppointment}
              id="footer-book-btn"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Maa Mina Homeo Hall. All rights reserved.</p>
          <p className="footer-disclaimer">
            Homeopathic medicines are prescribed by qualified BHMS physicians. Results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
