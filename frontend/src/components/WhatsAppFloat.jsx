import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const WHATSAPP_NUMBER = '919135363590';
  const defaultMessage = "Hello! I'd like to inquire about booking an appointment at Maa Mina Homeo Hall.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="react-whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <span className="float-tooltip">Chat with us on WhatsApp</span>
      <div className="float-btn">
        <FaWhatsapp />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
