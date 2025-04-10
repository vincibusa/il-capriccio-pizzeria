import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 

  FaChevronRight,

  FaPhone,

  FaClock,
  FaCalendarAlt,

} from 'react-icons/fa';

import ReservationModal from './ReservationModal';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const socialLinks = [
    { url: "https://www.instagram.com/capricciopizzeriacanicattini?igsh=cnlkNDZnY3AxcWc0&utm_source=qr", icon: <FaInstagram />, label: "IG Canicattini" },
    { url: "https://www.instagram.com/capricciopizzeriaavola?igsh=amp3cTEzZzUyZmp3&utm_source=qr", icon: <FaInstagram />, label: "IG Avola" },
    { url: "https://www.instagram.com/paolodipietro1988?igsh=Z3pvdzRlcTF5cHh5&utm_source=qr", icon: <FaInstagram />, label: "IG Paolo" },
    { url: "https://www.facebook.com/ilcapricciopizzeria", icon: <FaFacebookF /> },

  ];

  const quickLinks = [
    { key: "navbar.home", path: "/" },
    { key: "navbar.menu", path: "/menu.pdf", external: true }
  ];

  return (
    <footer className="bg-black text-white">
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
            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pizza-gold hover:text-pizza-red transition-colors duration-300 flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  {link.icon}
                  {link.label && <span className="text-xs mt-1">{link.label}</span>}
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
                      className="text-gray-400 hover:text-pizza-red transition-colors flex items-center"
                    >
                      <FaChevronRight className="mr-2 text-xs" />
                      {t(link.key)}
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-pizza-red transition-colors flex items-center"
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
                  className="text-gray-400 hover:text-pizza-red transition-colors flex items-center w-full"
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

            {/* Canicattini Bagni */}
            <div className="mb-6">
              <h5 className="text-white font-bold mb-2">CANICATTINI BAGNI</h5>
              <p className="text-gray-300 mb-1">P.ZZA XX SETTEMBRE, 92</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-pizza-gold transform scale-x-[-1]" />
                  <a href="tel:0931775382" className="text-gray-300 hover:text-pizza-red transition-colors">0931.775382</a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-pizza-gold transform scale-x-[-1]" />
                  <a href="tel:3343860572" className="text-gray-300 hover:text-pizza-red transition-colors">334.3860572</a>
                </li>
              </ul>
            </div>

            {/* Avola */}
            <div>
              <h5 className="text-white font-bold mb-2">AVOLA</h5>
              <p className="text-gray-300 mb-1">VIA SAVONAROLA, 70</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-pizza-gold transform scale-x-[-1]" />
                  <a href="tel:0931.1967295" className="text-gray-300 hover:text-pizza-red transition-colors">0931.1967295</a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-pizza-gold transform scale-x-[-1]" />
                  <a href="tel:375.6754715" className="text-gray-300 hover:text-pizza-red transition-colors">375.6754715</a>
                </li>
              </ul>
            </div>

            {/* Orari */}
            <div className="mt-4">
              <ul className="space-y-2">
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
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="text-pizza-gold">Seguici su:</span> TikTok, Instagram (Canicattini, Avola, Paolo), Facebook, Sky, WiFi
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