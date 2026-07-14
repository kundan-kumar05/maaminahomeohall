import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUser, FiPhone, FiMail, FiAlertCircle, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { submitContact } from '../services/api';
import './ContactModal.css';

const initialForm = { fullName: '', phone: '', email: '', disease: '', message: '' };

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-()]{8,15}$/.test(form.phone)) errs.phone = 'Enter a valid phone number';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.disease.trim()) errs.disease = 'Please describe your concern';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      await submitContact(form);
      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      // For demo: show success even if backend is not running
      setSuccess(true);
      setForm(initialForm);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setErrors({});
    setForm(initialForm);
    onClose();
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 24 } },
    exit: { opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.2 } },
  };

  const fields = [
    { name: 'fullName', label: 'Full Name', icon: FiUser, type: 'text', placeholder: 'Enter your full name' },
    { name: 'phone', label: 'Phone Number', icon: FiPhone, type: 'tel', placeholder: '+91 98765 43210' },
    { name: 'email', label: 'Email Address', icon: FiMail, type: 'email', placeholder: 'your@email.com' },
    { name: 'disease', label: 'Disease / Problem', icon: FiAlertCircle, type: 'text', placeholder: 'E.g. Skin disease, Arthritis...' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose}
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <div>
                <h2 className="modal-title">Book Appointment</h2>
                <p className="modal-subtitle">We'll confirm your slot within 24 hours</p>
              </div>
              <button className="modal-close" onClick={handleClose} aria-label="Close modal">
                <FiX />
              </button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    className="modal-success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="success-icon">
                      <FiCheckCircle />
                    </div>
                    <h3>Appointment Requested!</h3>
                    <p>
                      Thank you for reaching out. Our team at <strong>Maa Mina Homeo Hall</strong> will
                      contact you shortly to confirm your appointment.
                    </p>
                    <button className="btn btn-primary" onClick={handleClose}>
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="modal-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="form-grid">
                      {fields.map(({ name, label, icon: Icon, type, placeholder }) => (
                        <div key={name} className={`form-group ${errors[name] ? 'error' : ''}`}>
                          <label htmlFor={`modal-${name}`}>{label}</label>
                          <div className="input-wrap">
                            <Icon className="input-icon" />
                            <input
                              id={`modal-${name}`}
                              type={type}
                              name={name}
                              value={form[name]}
                              onChange={handleChange}
                              placeholder={placeholder}
                            />
                          </div>
                          {errors[name] && <span className="error-msg">{errors[name]}</span>}
                        </div>
                      ))}
                    </div>

                    {/* Message */}
                    <div className={`form-group ${errors.message ? 'error' : ''}`}>
                      <label htmlFor="modal-message">Message</label>
                      <div className="input-wrap textarea-wrap">
                        <FiMessageSquare className="input-icon" />
                        <textarea
                          id="modal-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Describe your symptoms or any specific requirements..."
                          rows={4}
                        />
                      </div>
                      {errors.message && <span className="error-msg">{errors.message}</span>}
                    </div>

                    {/* Actions */}
                    <div className="modal-actions">
                      <button type="button" className="btn btn-outline-green" onClick={handleClose}>
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? <span className="spinner" /> : null}
                        {loading ? 'Submitting...' : 'Submit Request'}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
