import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiAward, FiHeart, FiUsers, FiDollarSign, FiShield, FiThumbsUp
} from 'react-icons/fi';
import { GiLeafSwirl } from 'react-icons/gi';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: FiAward,
    title: 'Experienced Doctors',
    desc: 'BHMS-certified physicians with over 15 years of combined clinical experience in homeopathy.',
    color: '#2E8B57',
  },
  {
    icon: GiLeafSwirl,
    title: 'Safe & Natural Treatment',
    desc: 'All treatments use 100% natural homeopathic remedies — no harmful chemicals or side effects.',
    color: '#4CAF50',
  },
  {
    icon: FiHeart,
    title: 'Personalized Care',
    desc: 'Every patient receives an individualized treatment plan based on their unique constitution and health history.',
    color: '#EC407A',
  },
  {
    icon: FiDollarSign,
    title: 'Affordable Consultation',
    desc: 'High-quality homeopathic care at accessible prices — because good health should be available to all.',
    color: '#F57C00',
  },
  {
    icon: FiUsers,
    title: 'Family Healthcare',
    desc: 'Comprehensive care for the entire family — from newborns to seniors — under one trusted roof.',
    color: '#4FC3F7',
  },
  {
    icon: FiThumbsUp,
    title: 'Patient Satisfaction',
    desc: 'Thousands of patients have experienced lasting relief through our personalized homeopathic treatments.',
    color: '#AB47BC',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section why-section" ref={ref}>
      <div className="why-bg-decoration" />
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <FiShield /> Why Choose Us
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Reasons to Trust <span>Maa Mina Homeo Hall</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            We are committed to providing you and your family with the highest quality
            homeopathic care — natural, safe, and effective.
          </motion.p>
        </div>

        <motion.div
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              className="why-card"
              variants={itemVariants}
              style={{ '--why-color': r.color }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="why-icon">
                <r.icon />
              </div>
              <div className="why-card-content">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
              <div className="why-card-glow" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
