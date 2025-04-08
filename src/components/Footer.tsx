import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTripadvisor, 
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCalendarAlt
} from 'react-icons/fa';
import ReservationModal from './ReservationModal';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const socialLinks = [
    { url: "https://www.facebook.com/ilcapricciopizzeriapa", icon: <FaFacebookF /> },
    { url: "https://www.instagram.com/ilcapricciopizzeria/", icon: <FaInstagram /> },
    { url: "https://www.tripadvisor.it/Restaurant_Review-g187890-d12944456-Reviews-Il_Capriccio-Palermo_Province_of_Palermo_Sicily.html", icon: <FaTripadvisor /> }
  ];

  const quickLinks = [
    { key: "navbar.home", path: "/" },
    { key: "navbar.menu", path: "/menu.pdf", external: true }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo e descrizione */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-playfair text-pizza-gold">Il Capriccio</h3>
            </Link>
            <p className="text-sm font-medium text-gray-300 italic">{t('footer.tagline')}</p>
            <p className="text-sm text-gray-400">{t('footer.description')}</p>
            
            {/* Social links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pizza-gold transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pizza-gold">{t('footer.quickLinksHeader')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  {link.external ? (
                    <a 
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pizza-gold transition-colors flex items-center"
                    >
                      <FaChevronRight className="mr-2 text-xs" />
                      {t(link.key)}
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-pizza-gold transition-colors flex items-center"
                    >
                      <FaChevronRight className="mr-2 text-xs" />
                      {t(link.key)}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsReservationModalOpen(true)}
                  className="text-gray-400 hover:text-pizza-gold transition-colors flex items-center w-full"
                >
                  <FaCalendarAlt className="mr-2 text-xs" />
                  {t('navbar.reservation')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pizza-gold">{t('footer.contactHeader')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-pizza-gold" />
                <span className="text-gray-300">Via Messina Marine, 197, 90123 Palermo PA</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-pizza-gold" />
                <a href="tel:+39091 6213584" className="text-gray-300 hover:text-pizza-gold transition-colors">+39 091 621 3584</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-pizza-gold" />
                <a href="mailto:info@ilcapricciopizzeria.it" className="text-gray-300 hover:text-pizza-gold transition-colors">info@ilcapricciopizzeria.it</a>
              </li>
              <li className="flex items-start">
                <FaClock className="mr-2 text-pizza-gold mt-1" />
                <div>
                  <p className="text-gray-300">Mar - Dom: 19:00 - 24:00</p>
                  <p className="text-gray-300">Lunedì: Chiuso</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>

      {/* Reservation Modal */}
      {isReservationModalOpen && (
        <ReservationModal
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      )}
    </footer>
  );
};

export default Footer;