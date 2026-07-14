import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GiSpineArrow, GiBrain, GiWaterDrop, GiHealing,
  GiMedicalPackAlt, GiMedicines, GiMedicalThermometer
} from 'react-icons/gi';
import { MdBloodtype, MdFavorite, MdOutlinePregnantWoman } from 'react-icons/md';
import './Treatments.css';

const treatments = [
  {
    icon: GiSpineArrow,
    title: 'Paralysis',
    desc: 'Advanced homeopathic treatment for stroke-related and nerve paralysis with natural recovery support.',
    color: '#2E8B57',
  },
  {
    icon: GiWaterDrop,
    title: 'Skin Diseases',
    desc: 'Natural remedies for eczema, psoriasis, urticaria, acne, and all chronic skin conditions.',
    color: '#FF8A65',
  },
  {
    icon: GiBrain,
    title: 'Arthritis',
    desc: 'Effective homeopathic management for joint pain, rheumatoid arthritis, and inflammatory conditions.',
    color: '#7986CB',
  },
  {
    icon: GiHealing,
    title: 'Infant Diseases',
    desc: 'Safe and gentle treatment for childhood ailments including colic, fever, respiratory issues, and allergies.',
    color: '#4FC3F7',
  },
  {
    icon: MdOutlinePregnantWoman,
    title: 'Infertility',
    desc: 'Holistic homeopathic care to address hormonal imbalances and improve reproductive health naturally.',
    color: '#EC407A',
  },
  {
    icon: GiMedicalPackAlt,
    title: 'Impotence',
    desc: 'Confidential and effective homeopathic treatment for sexual health and vitality issues.',
    color: '#AB47BC',
  },
  {
    icon: MdFavorite,
    title: 'Diabetes (Sugar)',
    desc: 'Supporting blood sugar management and diabetic complications with natural homeopathic remedies.',
    color: '#F57C00',
  },
  {
    icon: MdBloodtype,
    title: 'Blood Pressure',
    desc: 'Natural approach to managing hypertension and supporting cardiovascular wellness.',
    color: '#E53935',
  },
  {
    icon: GiMedicines,
    title: 'Thyroid Disorders',
    desc: 'Constitutional homeopathic treatment for hypothyroidism, hyperthyroidism, and thyroid nodules.',
    color: '#00897B',
  },
];

const Treatments = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="treatments" className="section treatments-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <GiMedicalThermometer /> What We Treat
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our <span>Treatment</span> Specialties
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            We offer homeopathic solutions for a wide range of acute and chronic conditions,
            tailored to each patient's unique constitution.
          </motion.p>
        </div>

        <div className="treatments-grid">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              className="treatment-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
              style={{ '--t-color': t.color }}
            >
              <div className="treatment-icon-wrap">
                <t.icon className="treatment-icon" />
                <div className="treatment-icon-glow" />
              </div>
              <h3 className="treatment-title">{t.title}</h3>
              <p className="treatment-desc">{t.desc}</p>
              <div className="treatment-tag">
                <span>Homeopathic</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
