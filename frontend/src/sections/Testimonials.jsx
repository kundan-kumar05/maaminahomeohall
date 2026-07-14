import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Ramesh Sharma',
    location: 'Darbhanga, Bihar',
    rating: 5,
    initials: 'RS',
    color: '#2E8B57',
    review:
      'I had been suffering from severe arthritis for years and tried many allopathic medicines with no lasting relief. After 3 months of treatment with Dr. Birju Kumar, I feel like a new person. The pain has reduced significantly and I can walk freely again. Highly recommended!',
    disease: 'Arthritis',
  },
  {
    id: 2,
    name: 'Sita Devi',
    location: 'Madhubani, Bihar',
    rating: 5,
    initials: 'SD',
    color: '#EC407A',
    review:
      'Dr. Radha Kumari treated my 3-year-old son for recurring fever and respiratory issues. Within weeks, his immunity improved dramatically. She is so gentle and patient with children. We are truly grateful for her care and expertise.',
    disease: 'Infant Diseases',
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    location: 'Samastipur, Bihar',
    rating: 5,
    initials: 'SK',
    color: '#7986CB',
    review:
      'After my stroke, I had partial paralysis on my left side. My family brought me to Maa Mina Homeo Hall as a last resort. Dr. Birju Kumar\'s treatment has helped me regain significant movement and strength. I am truly grateful for this miracle.',
    disease: 'Paralysis',
  },
  {
    id: 4,
    name: 'Priya Kumari',
    location: 'Muzaffarpur, Bihar',
    rating: 5,
    initials: 'PK',
    color: '#00897B',
    review:
      'I had been struggling with thyroid problems and weight gain for 5 years. Dr. Radha Kumari\'s homeopathic treatment balanced my thyroid levels without any side effects. I feel energetic and healthy now. This clinic is a blessing!',
    disease: 'Thyroid Disorders',
  },
  {
    id: 5,
    name: 'Mohan Lal',
    location: 'Sitamarhi, Bihar',
    rating: 5,
    initials: 'ML',
    color: '#F57C00',
    review:
      'My chronic psoriasis had been bothering me for over 8 years. After treatment at Maa Mina Homeo Hall, the patches have cleared up significantly. The doctors are knowledgeable, caring, and affordable. Best decision I ever made!',
    disease: 'Skin Diseases',
  },
  {
    id: 6,
    name: 'Anita Singh',
    location: 'Begusarai, Bihar',
    rating: 5,
    initials: 'AS',
    color: '#AB47BC',
    review:
      'We had been trying for a baby for years without success. Dr. Radha Kumari\'s compassionate approach and constitutional homeopathic treatment helped us conceive naturally. We are now blessed with a beautiful daughter. Thank you from the bottom of our hearts!',
    disease: 'Infertility',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="section testimonials-section" ref={ref}>
      <div className="testimonials-bg-left" />
      <div className="testimonials-bg-right" />
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <FiStar /> Patient Stories
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            What Our <span>Patients Say</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Real stories from real patients who have experienced the healing power of
            homeopathy at Maa Mina Homeo Hall.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  <div className="test-rating">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FiStar key={i} className="test-star" />
                    ))}
                  </div>
                  <p className="test-review">{t.review}</p>
                  <div className="test-footer">
                    <div
                      className="test-avatar"
                      style={{ background: `linear-gradient(135deg, ${t.color}cc, ${t.color})` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="test-name">{t.name}</p>
                      <p className="test-location">{t.location}</p>
                    </div>
                    <span className="test-disease-chip" style={{ '--d-color': t.color }}>
                      {t.disease}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
