import { useState } from 'react';
import { FiUser, FiPhone, FiMapPin, FiCalendar, FiFileText, FiAlertCircle, FiCheckCircle, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaUserMd } from 'react-icons/fa';
import './WhatsAppSection.css';

const WhatsAppSection = () => {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    city: '',
    symptoms: '',
    date: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const WHATSAPP_NUMBER = '919135363590';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (form.fullName.trim().length < 2) {
      errs.fullName = 'Full Name must be at least 2 characters';
    }

    if (!form.age.trim()) {
      errs.age = 'Age is required';
    } else {
      const ageNum = Number(form.age.trim());
      if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120 || !Number.isInteger(ageNum)) {
        errs.age = 'Please enter a valid age (1-120)';
      }
    }

    if (!form.gender) {
      errs.gender = 'Please select a gender';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^\d+$/.test(form.phone.trim())) {
      errs.phone = 'Mobile number must contain digits only';
    } else if (form.phone.trim().length < 10 || form.phone.trim().length > 15) {
      errs.phone = 'Mobile number must be 10 to 15 digits';
    }

    if (!form.symptoms.trim()) {
      errs.symptoms = 'Symptoms are required';
    } else if (form.symptoms.trim().length < 5) {
      errs.symptoms = 'Please describe symptoms in at least 5 characters';
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Format date nicely (DD-MM-YYYY)
    let formattedDate = 'Not Specified';
    if (form.date) {
      const dateObj = new Date(form.date);
      if (!isNaN(dateObj.getTime())) {
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear();
        formattedDate = `${day}-${month}-${year}`;
      }
    }

    // Compile WhatsApp message
    const message = `🏥 New Appointment Request

Patient Name: ${form.fullName.trim()}
Age: ${form.age.trim()}
Gender: ${form.gender}
Mobile Number: ${form.phone.trim()}
City: ${form.city.trim() || 'Not Specified'}
Symptoms: ${form.symptoms.trim()}
Preferred Appointment Date: ${formattedDate}
Additional Notes: ${form.notes.trim() || 'None'}

Please contact me regarding an appointment.`;

    setSuccess(true);
    
    // Redirect after slightly delay so user sees success state
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setSuccess(false);
      setForm({
        fullName: '',
        age: '',
        gender: '',
        phone: '',
        city: '',
        symptoms: '',
        date: '',
        notes: ''
      });
    }, 1500);
  };

  return (
    <section id="whatsapp-booking" className="section whatsapp-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">
            <FaWhatsapp style={{ color: '#25D366', fontSize: '16px' }} /> Easy Booking
          </span>
          <h2 className="section-title">
            Book Appointment <span>via WhatsApp</span>
          </h2>
          <p className="section-subtitle">
            Fill out the consultation details below to instantly generate a pre-formatted request and launch our medical support on WhatsApp.
          </p>
        </div>

        <div className="whatsapp-grid">
          
          {/* Left Side: Form Container */}
          <div className="whatsapp-card-form">
            <h3 className="card-heading">
              <FiCalendar className="heading-icon" /> Patient Details
            </h3>

            {success && (
              <div className="react-status-success">
                <FiCheckCircle className="status-icon" />
                <div>
                  <strong>Form validated successfully!</strong>
                  <p>Opening WhatsApp to send your request. Please send the message in the chat window.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="react-form-grid" noValidate>
              
              {/* Full Name */}
              <div className={`react-form-group full-width ${errors.fullName ? 'has-error' : ''}`}>
                <label>Full Name <span className="required">*</span></label>
                <div className="react-input-wrapper">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter patient's full name"
                    disabled={success}
                  />
                </div>
                {errors.fullName && <span className="react-error-text">{errors.fullName}</span>}
              </div>

              {/* Age */}
              <div className={`react-form-group ${errors.age ? 'has-error' : ''}`}>
                <label>Age <span className="required">*</span></label>
                <div className="react-input-wrapper">
                  <FiAlertCircle className="input-icon" />
                  <input
                    type="text"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Age (e.g. 28)"
                    inputMode="numeric"
                    disabled={success}
                  />
                </div>
                {errors.age && <span className="react-error-text">{errors.age}</span>}
              </div>

              {/* Gender */}
              <div className={`react-form-group ${errors.gender ? 'has-error' : ''}`}>
                <label>Gender <span className="required">*</span></label>
                <div className="react-input-wrapper">
                  <FiUser className="input-icon" />
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    disabled={success}
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {errors.gender && <span className="react-error-text">{errors.gender}</span>}
              </div>

              {/* Phone */}
              <div className={`react-form-group ${errors.phone ? 'has-error' : ''}`}>
                <label>Mobile Number <span className="required">*</span></label>
                <div className="react-input-wrapper">
                  <FiPhone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Digits only (e.g. 9876543210)"
                    inputMode="tel"
                    disabled={success}
                  />
                </div>
                {errors.phone && <span className="react-error-text">{errors.phone}</span>}
              </div>

              {/* City */}
              <div className="react-form-group">
                <label>City</label>
                <div className="react-input-wrapper">
                  <FiMapPin className="input-icon" />
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="E.g. Darbhanga"
                    disabled={success}
                  />
                </div>
              </div>

              {/* Symptoms */}
              <div className={`react-form-group full-width ${errors.symptoms ? 'has-error' : ''}`}>
                <label>Symptoms / Health Problem <span className="required">*</span></label>
                <textarea
                  name="symptoms"
                  value={form.symptoms}
                  onChange={handleChange}
                  placeholder="Describe your symptoms (e.g. chronic skin allergy, joint pain, migraine, acid reflux...)"
                  disabled={success}
                />
                {errors.symptoms && <span className="react-error-text">{errors.symptoms}</span>}
              </div>

              {/* Preferred Date */}
              <div className="react-form-group full-width">
                <label>Preferred Appointment Date</label>
                <div className="react-input-wrapper">
                  <FiCalendar className="input-icon" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    disabled={success}
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="react-form-group full-width">
                <label>Additional Notes / Medical History <span className="text-light">(Optional)</span></label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="E.g. Past treatments, allergies, current medications..."
                  disabled={success}
                />
              </div>

              {/* Submit Button */}
              <div className="react-form-group full-width">
                <button type="submit" className="react-btn-submit" disabled={success}>
                  <FaWhatsapp className="btn-icon" />
                  Book Appointment on WhatsApp
                </button>
              </div>

            </form>
          </div>

          {/* Right Side: Information Sidebar */}
          <div className="whatsapp-info-panel">
            
            <div className="info-card-block">
              <h4 className="info-block-title">
                <FiClock className="info-title-icon" /> Clinic Timings
              </h4>
              <ul className="info-block-list">
                <li>
                  <span className="bullet">⏰</span>
                  <div>
                    <strong>Mon - Sat:</strong> 09:00 AM - 01:00 PM & 04:00 PM - 08:00 PM
                  </div>
                </li>
                <li>
                  <span className="bullet">⏰</span>
                  <div>
                    <strong>Sun:</strong> 09:00 AM - 01:00 PM (Closed Evening)
                  </div>
                </li>
              </ul>
            </div>

            <div className="info-card-block">
              <h4 className="info-block-title">
                <FiMapPin className="info-title-icon" /> Clinic Address
              </h4>
              <ul className="info-block-list">
                <li>
                  <span className="bullet">📍</span>
                  <div>
                    <strong>Maa Mina Homeo Hall</strong><br />
                    Kathalbari, Near Tower Chowk, Darbhanga, Bihar - 846004
                  </div>
                </li>
              </ul>
            </div>

            <div className="info-card-block">
              <h4 className="info-block-title">
                <FaUserMd className="info-title-icon" /> Available Doctors
              </h4>
              
              <div className="doc-mini-entry">
                <div className="doc-entry-avatar">BK</div>
                <div className="doc-entry-details">
                  <h5>Dr. Birju Kumar</h5>
                  <p>BHMS | Specialist in Paralysis, Skin, Arthritis</p>
                </div>
              </div>

              <div className="doc-mini-entry">
                <div className="doc-entry-avatar avatar-blue">RK</div>
                <div className="doc-entry-details">
                  <h5>Dr. Radha Kumari</h5>
                  <p>BHMS | Specialist in Infant Diseases, Infertility</p>
                </div>
              </div>
            </div>

            <div className="react-disclaimer-box">
              💡 <strong>Instant Support:</strong> Sending this form over WhatsApp delivers the details directly to our desk, resulting in faster scheduling and less wait time.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatsAppSection;
