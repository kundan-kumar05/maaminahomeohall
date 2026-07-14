import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import './LoadingScreen.css';

const LoadingScreen = () => (
  <div className="loading-screen">
    <motion.div
      className="loading-content"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-logo-wrap">
        <motion.div
          className="loading-logo"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <img src={logo} alt="Maa Mina Homeo Hall" className="loading-logo-img" />
        </motion.div>
        <div className="loading-pulse-ring" />
        <div className="loading-pulse-ring delay" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="loading-title"
      >
        Maa Mina Homeo Hall
      </motion.h2>
      <p className="loading-subtitle">Natural Healing for a Healthier Life</p>
      <div className="loading-dots">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  </div>
);

export default LoadingScreen;
