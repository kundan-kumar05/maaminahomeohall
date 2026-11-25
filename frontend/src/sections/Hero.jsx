import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMessageCircle } from 'react-icons/fi';
import { GiLeafSwirl, GiHealing } from 'react-icons/gi';
import drBirjuImg from '../assets/dr-birju.svg';
import drRadhaImg from '../assets/dr-radha.svg';
import './Hero.css';

const heroDoctors = [
  {
    id: 'birju',
    name: 'Dr. Birju Kumar',
    cred: 'BHMS · Darbhanga',
    exp: '15+ Yrs',
    image: drBirjuImg,
    tilt: -5,
    variant: 'male',
  },
  {
    id: 'radha',
    name: 'Dr. Radha Kumari',
    cred: 'BHMS · Jaipur',
    exp: '12+ Yrs',
    image: drRadhaImg,
    tilt: 5,
    variant: 'female',
  },
];

const Hero = ({ onBookAppointment }) => {
  const particlesRef = useRef(null);

  return (
    <section id="home" className="hero">
      {/* Background Gradient Blobs */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-overlay" />
      </div>

      {/* Floating Particles */}
      <div className="hero-particles" ref={particlesRef}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`particle particle-${i}`} />
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-text-col">
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GiLeafSwirl className="badge-icon" />
            <span>Est. Since Years · Trusted Homeopathic Care</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Natural Healing for a{' '}
            <span className="hero-heading-highlight">Healthier Life</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="hero-subheading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Trusted Homeopathic Care for You and Your Family. Personalized
            treatments rooted in the wisdom of natural medicine — safe, gentle,
            and effective.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <button className="btn btn-primary hero-btn" onClick={onBookAppointment} id="hero-book-btn">
              <FiCalendar /> Book Appointment
            </button>
            <a href="#contact" className="btn btn-outline hero-btn" id="hero-contact-btn">
              <FiMessageCircle /> Contact Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { number: '5000+', label: 'Patients Treated' },
              { number: '15+', label: 'Years Experience' },
              { number: '2', label: 'Expert Doctors' },
              { number: '9+', label: 'Treatments' },
            ].map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-card-float">
            {/* Tilted Dual Doctor Portraits */}
            <div className="hero-doctors-showcase">
              {heroDoctors.map((doc, idx) => (
                <motion.a
                  key={doc.id}
                  href="#doctors"
                  className={`hero-doc-card hero-doc-${doc.variant}`}
                  initial={{ opacity: 0, y: 30, rotate: doc.tilt * 1.6 }}
                  animate={{ opacity: 1, y: 0, rotate: doc.tilt }}
                  whileHover={{ rotate: 0, y: -10, scale: 1.04 }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 18,
                    delay: 0.45 + idx * 0.15,
                  }}
                >
                  <div className="hero-doc-photo-wrap">
                    <img
                      src={doc.image}
                      alt={`${doc.name} — ${doc.cred} Homeopathic Physician`}
                      width="400"
                      height="500"
                      loading="eager"
                      className="hero-doc-photo"
                    />
                    <span className="hero-doc-exp-badge">{doc.exp}</span>
                  </div>
                  <div className="hero-doc-caption">
                    <p className="hero-doc-name">{doc.name}</p>
                    <p className="hero-doc-cred">{doc.cred}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Clinic Summary Bar */}
            <div className="hero-clinic-bar">
              <div className="hero-clinic-bar-head">
                <div className="hero-icon-ring">
                  <GiHealing />
                </div>
                <div>
                  <h3>Maa Mina Homeo Hall</h3>
                  <p>Expert Homeopathic Treatment</p>
                </div>
              </div>
              <div className="hero-card-tags">
                {['Paralysis', 'Skin Care', 'Arthritis', 'Infertility'].map(tag => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Floating mini cards */}
            <motion.div
              className="mini-card mini-card-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <span className="mini-icon">🌿</span>
              <div>
                <p>Natural</p>
                <p>Treatment</p>
              </div>
            </motion.div>

            <motion.div
              className="mini-card mini-card-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="mini-icon">⭐</span>
              <div>
                <p>4.9 / 5</p>
                <p>Patient Rating</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="scroll-dot" />
      </motion.div>
    </section>
  );
};

export default Hero;
