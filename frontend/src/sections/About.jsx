import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiLeafSwirl, GiHealing, GiMedicinePills } from 'react-icons/gi';
import { FiAward, FiHeart, FiUsers } from 'react-icons/fi';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const highlights = [
  { icon: FiAward, title: 'BHMS Qualified Doctors', desc: 'Our doctors hold Bachelor of Homeopathic Medicine & Surgery degrees.' },
  { icon: GiHealing, title: 'Holistic Approach', desc: 'We treat the root cause — not just the symptoms.' },
  { icon: FiHeart, title: 'Patient-First Care', desc: 'Every patient receives personalized attention and treatment.' },
  { icon: FiUsers, title: 'Family Healthcare', desc: 'From infants to seniors, we care for the whole family.' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Left Visual */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="about-img-card">
              <div className="about-main-visual">
                <div className="visual-center-icon">
                  <GiMedicinePills />
                </div>
                <div className="visual-rings">
                  <div className="vring vring-1" />
                  <div className="vring vring-2" />
                  <div className="vring vring-3" />
                </div>
              </div>
              <div className="about-float-badge">
                <GiLeafSwirl className="badge-leaf" />
                <div>
                  <p className="badge-num">100%</p>
                  <p className="badge-text">Natural Medicine</p>
                </div>
              </div>
              <div className="about-float-stat">
                <p className="fstat-num">15+</p>
                <p className="fstat-text">Years of<br />Healing</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="about-content">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <span className="section-badge">
                <GiLeafSwirl /> About Our Clinic
              </span>
              <h2 className="section-title">
                Committed to <span>Holistic &amp; Natural</span> Healing
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '20px' }}>
                Maa Mina Homeo Hall is a trusted homeopathic clinic dedicated to
                providing safe, natural, and effective treatments for a wide range
                of health conditions. Founded with a deep commitment to holistic
                healing, we believe that true health comes from restoring the
                body's natural balance.
              </p>
              <p className="section-subtitle">
                Our experienced BHMS-qualified doctors combine decades of clinical
                expertise with the time-tested wisdom of homeopathy to deliver
                personalized care for every patient — from infants to the elderly.
                We treat the root cause of illness, not just the symptoms.
              </p>
            </motion.div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className="about-highlight-card"
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <div className="highlight-icon">
                    <h.icon />
                  </div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
