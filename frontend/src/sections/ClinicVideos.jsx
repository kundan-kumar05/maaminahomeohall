import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPlayCircle } from 'react-icons/fi';
import './ClinicVideos.css';

const videos = [
  {
    id: 'KpWP42Ph0ew',
    title: 'Maa Meena Homeo Hall - Video 1',
  },
  {
    id: '_AbVP6PbpcM',
    title: 'Maa Meena Homeo Hall - Video 2',
  },
  {
    id: '7U_9Zq945Eo',
    title: 'Maa Meena Homeo Hall - Video 3',
  },
];

const ClinicVideos = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="videos" className="section clinic-videos-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <FiPlayCircle /> Clinic Videos
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Explore <span>Maa Meena Homeo Hall</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get to know our clinic, our approach and the care we provide.
          </motion.p>
        </div>

        <div className="clinic-videos-grid">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="clinic-video-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            >
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-iframe"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicVideos;
