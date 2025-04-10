import React from "react";
import { motion } from "framer-motion";
import { useTranslation, } from "react-i18next";
import { FaMapMarkerAlt, FaPhone, FaClock, FaExternalLinkAlt } from "react-icons/fa";

const LocationSection: React.FC = () => {
  const { t } = useTranslation();
  
  // Animazioni
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6 } 
    }
  };
  
  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5 } 
    }
  };
  
  const line = {
    hidden: { 
      scaleX: 0 
    },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.7 } 
    }
  };
  
  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7 } 
    }
  };
  
  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7 } 
    }
  };

  const locationInfo = [
    {
      title: "CANICATTINI BAGNI",
      address: "P.ZZA XX SETTEMBRE, 92",
      phones: [
        { number: "0931.775382", link: "tel:0931775382" },
        { number: "334.3860572", link: "tel:3343860572" }
      ],
      mapUrl: "https://www.google.com/maps/place/Via+XX+Settembre,+92,+96010+Canicattini+Bagni+SR/@37.0342072,15.0584421,17z/data=!3m1!4b1!4m6!3m5!1s0x1313d5165c418577:0x63bf3ce2682ced34!8m2!3d37.034203!4d15.063313!16s%2Fg%2F11c2bhnbbv?hl=it&entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoASAFQAw%3D%3D",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.634683314799!2d15.058442099999998!3d37.0342072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313d5165c418577%3A0x63bf3ce2682ced34!2sVia%20XX%20Settembre%2C%2092%2C%2096010%20Canicattini%20Bagni%20SR!5e0!3m2!1sit!2sit!4v1719250633513!5m2!1sit!2sit"
    },
    {
      title: "AVOLA",
      address: "VIA SAVONAROLA, 70",
      phones: [
        { number: "0931.1967295", link: "tel:0931.1967295" },
        { number: "375.6754715", link: "tel:375.6754715" }
      ],
      mapUrl: "https://www.google.com/maps/place/Il+Capriccio/@36.9147203,15.1280877,17z/data=!3m1!4b1!4m6!3m5!1s0x13122fcd5712627d:0xa32b9f09298925d5!8m2!3d36.914716!4d15.1306626!16s%2Fg%2F11p4qk_51y?hl=it&entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoASAFQAw%3D%3D",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.7050950845487!2d15.1280877!3d36.9147203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13122fcd5712627d%3A0xa32b9f09298925d5!2sIl%20Capriccio!5e0!3m2!1sit!2sit!4v1719250781458!5m2!1sit!2sit"
    }
  ];

  const openingHours = {
    weekdays: "Mar - Dom: 18:00 - 24:00",
    closed: "Lunedì: Chiuso"
  };

  return (
    <section id="locations" className="pizza-section bg-pizza-background relative overflow-hidden py-20">
      {/* Pattern di sfondo */}
      <div className="absolute inset-0 bg-pizza-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titolo con decorazione e animazione */}
        <div className="text-center mb-16">
          <motion.span 
            variants={scaleIn}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            className="inline-block bg-pizza-red text-white p-3 rounded-full mb-4"
          >
            <FaMapMarkerAlt size={30} />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="pizza-title font-playfair text-5xl md:text-6xl"
          >
            {t("locationSection.title") || "Dove Siamo"}
          </motion.h2>
          <motion.div
            variants={line}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.4 }}
            className="h-1 w-24 bg-pizza-red mx-auto mt-6 mb-6"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.5 }}
            className="text-gray-700 max-w-3xl mx-auto font-montserrat text-lg"
          >
            {t("locationSection.subtitle") || "Vieni a trovarci in una delle nostre due sedi per assaporare le nostre deliziose pizze artigianali."}
          </motion.p>
        </div>

        {/* Orari di apertura */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-14 p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
        >
          <FaClock className="text-3xl text-pizza-gold" />
          <div>
            <h3 className="text-xl font-playfair mb-2 text-pizza-black">{t("locationSection.hours") || "Orari di Apertura"}</h3>
            <p className="text-gray-700 font-montserrat">{openingHours.weekdays}</p>
            <p className="text-gray-700 font-montserrat">{openingHours.closed}</p>
          </div>
        </motion.div>

        {/* Cards per le due sedi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-10">
          {locationInfo.map((location, index) => (
            <motion.div
              key={location.title}
              variants={index === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              transition={{ delay: 0.3 + index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Mappa incorporata */}
              <div className="w-full h-64 relative">
                <iframe 
                  src={location.mapEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mappa di ${location.title}`}
                  className="absolute inset-0"
                ></iframe>
              </div>
              
              {/* Informazioni sede */}
              <div className="p-6">
                <h3 className="text-2xl font-playfair text-pizza-gold mb-3">{location.title}</h3>
                <p className="text-gray-700 font-medium mb-4">{location.address}</p>
                
                {/* Numeri di telefono */}
                <div className="mb-6">
                  <h4 className="text-lg font-playfair mb-2 text-pizza-black">{t("locationSection.contact") || "Contatti"}</h4>
                  <ul className="space-y-2">
                    {location.phones.map((phone, i) => (
                      <li key={i} className="flex items-center">
                        <FaPhone className="mr-2 text-pizza-gold transform scale-x-[-1]" />
                        <a 
                          href={phone.link} 
                          className="text-gray-700 hover:text-pizza-red transition-colors"
                        >
                          {phone.number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Pulsante per aprire la mappa */}
                <motion.a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-pizza-red text-white rounded-lg hover:bg-pizza-red-dark transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("locationSection.directions") || "Indicazioni Stradali"}
                  <FaExternalLinkAlt className="ml-2" size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Nota finale */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
          transition={{ delay: 0.7 }}
          className="text-gray-600 text-center font-montserrat italic max-w-2xl mx-auto"
        >
          {t("locationSection.note") || "Ti aspettiamo per un'esperienza gastronomica autentica e indimenticabile. Per prenotazioni, ti invitiamo a contattarci telefonicamente."}
        </motion.p>
      </div>
    </section>
  );
};

export default LocationSection; 