import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GiMedicalThermometer } from 'react-icons/gi';
import { FiStar, FiMapPin, FiBookOpen } from 'react-icons/fi';
import './Doctors.css';

const doctors = [
  {
    id: 'dr-birju',
    name: 'Dr. Birju Kumar',
    credentials: 'BHMS',
    institution: 'Dr. Y.S.H.M & C.H., Darbhanga',
    specializations: ['Paralysis', 'Skin Diseases', 'Arthritis'],
    experience: '15+ Years',
    patients: '3000+',
    initials: 'BK',
    color: 'green',
    description:
      'Dr. Birju Kumar is an expert homeopathic physician specializing in neurological and musculoskeletal disorders. His deep understanding of constitutional remedies has helped thousands of patients regain mobility and health.',
  },
  {
    id: 'dr-radha',
    name: 'Dr. Radha Kumari',
    credentials: 'BHMS',
    institution: 'NIMS, Jaipur',
    specializations: ['Infant Diseases', 'Infertility', 'Impotence'],
    experience: '12+ Years',
    patients: '2000+',
    initials: 'RK',
    color: 'blue',
    description:
      'Dr. Radha Kumari specializes in women\'s health, pediatric care, and reproductive medicine. With her compassionate approach and extensive clinical experience, she has brought hope and healing to countless families.',
  },
];

const specColors = {
  'Paralysis': '#2E8B57',
  'Skin Diseases': '#FF8A65',
  'Arthritis': '#7986CB',
  'Infant Diseases': '#4FC3F7',
  'Infertility': '#EC407A',
  'Impotence': '#AB47BC',
};

const Doctors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="doctors" className="section doctors-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <GiMedicalThermometer /> Our Expert Team
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Meet Our <span>Qualified Doctors</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our BHMS-certified homeopathic doctors bring decades of experience and genuine
            care to every consultation.
          </motion.p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              className={`doctor-card ${doc.color}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
            >
              {/* Card Header */}
              <div className="doctor-card-header">
                <div className={`doctor-avatar-large ${doc.color}`}>
                  {doc.initials}
                </div>
                <div className="doctor-rating">
                  {[1,2,3,4,5].map(s => <FiStar key={s} className="star" />)}
                  <span>5.0</span>
                </div>
              </div>

              {/* Info */}
              <div className="doctor-info">
                <div className="doctor-name-wrap">
                  <h3 className="doctor-name">{doc.name}</h3>
                  <span className={`credentials-badge ${doc.color}`}>{doc.credentials}</span>
                </div>

                <div className="doctor-meta">
                  <span className="doctor-meta-item">
                    <FiMapPin /> {doc.institution}
                  </span>
                  <span className="doctor-meta-item">
                    <FiBookOpen /> {doc.experience} Experience
                  </span>
                </div>

                <p className="doctor-desc">{doc.description}</p>

                <div className="doctor-specs">
                  <p className="specs-label">Specializations</p>
                  <div className="specs-list">
                    {doc.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="spec-chip"
                        style={{ '--chip-color': specColors[spec] || 'var(--primary)' }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="doctor-stats-row">
                  <div className="doc-stat">
                    <span className="doc-stat-num">{doc.patients}</span>
                    <span className="doc-stat-label">Patients</span>
                  </div>
                  <div className="doc-stat">
                    <span className="doc-stat-num">{doc.experience}</span>
                    <span className="doc-stat-label">Experience</span>
                  </div>
                  <div className="doc-stat">
                    <span className="doc-stat-num">100%</span>
                    <span className="doc-stat-label">Natural</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
