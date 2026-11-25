import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import ContactModal from './components/ContactModal';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import ClinicVideos from './sections/ClinicVideos';
import Doctors from './sections/Doctors';
import Treatments from './sections/Treatments';
import WhatsAppSection from './sections/WhatsAppSection';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar onBookAppointment={openModal} />

      <main>
        <Hero onBookAppointment={openModal} />
        <About />
        <ClinicVideos />
        <Doctors />
        <Treatments />
        <WhatsAppSection />
        <WhyChooseUs />
        <Testimonials />
        <Contact onBookAppointment={openModal} />
      </main>

      <Footer onBookAppointment={openModal} />
      <ScrollToTop />
      <WhatsAppFloat />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
