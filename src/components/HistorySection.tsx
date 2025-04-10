import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import molecolaAbout from "../assets/capriccioAbout.jpeg";
import { FaPizzaSlice } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";

const HistorySection: React.FC = () => {
  const { t } = useTranslation();
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);
  
  // Aggiungiamo un effetto per misurare l'altezza dell'immagine
  useEffect(() => {
    const updateHeight = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    };
    
    // Inizialmente impostiamo un tempo per assicurarci che l'immagine sia caricata
    const timer = setTimeout(() => {
      updateHeight();
    }, 300);
    
    // Aggiorniamo anche al ridimensionamento
    window.addEventListener('resize', updateHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
  
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
  
  const textParaLeft = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5 } 
    }
  };
  
  const rotateCard = {
    hidden: { 
      rotate: 6 
    },
    visible: { 
      rotate: -2, 
      transition: { duration: 0.7 } 
    }
  };
  
  const rotateCardInner = {
    hidden: { 
      rotate: -6 
    },
    visible: { 
      rotate: 2, 
      transition: { duration: 0.7 } 
    }
  };
  

  
  const captionVariant = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      rotate: 8 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 2, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="about" className="pizza-section bg-pizza-background relative overflow-hidden">
      {/* Pattern di sfondo */}
      <div className="absolute inset-0 bg-pizza-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titolo con decorazione e animazione migliorata */}
        <div className="text-center mb-16">
          <motion.span 
            variants={scaleIn}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            className="inline-block bg-pizza-red text-white p-3 rounded-full mb-4"
          >
            <FaPizzaSlice size={30} />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="pizza-title font-playfair text-5xl md:text-6xl"
          >
            {t("historySection.title")}
          </motion.h2>
          <motion.div
            variants={line}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.4 }}
            className="h-1 w-24 bg-pizza-red mx-auto mt-6 mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenuto testuale con animazioni a cascata e movimento orizzontale */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg flex flex-col"
            style={{ 
              height: imageHeight > 0 ? `${imageHeight}px` : 'auto',
              width: imageRef.current ? `${imageRef.current.offsetWidth}px` : 'auto'
            }}
          >
            {/* Testi lunghi per desktop con animazioni a cascata */}
            <div className="hidden lg:block space-y-6 flex-grow overflow-y-auto pr-2">
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-lg font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.paragraph1"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.5 }}
                className="text-gray-700 text-lg font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.paragraph2"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.7 }}
                className="text-gray-700 text-lg font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.paragraph3"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.9 }}
                className="text-gray-700 text-lg font-montserrat leading-relaxed italic"
              >
                "<Trans
                  i18nKey="historySection.quote"
                  components={{ b: <span className="text-pizza-red font-medium hover:scale-105 inline-block transition-transform" /> }}
                />"
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 1.0 }}
                className="text-gray-700 text-right text-sm font-montserrat"
              >
                - Paolo Di Pietro
              </motion.p>
            </div>

            {/* Testi brevi per mobile con animazioni a cascata */}
            <div className="block lg:hidden space-y-4 overflow-y-auto pr-2">
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-base font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.shortParagraph1"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.5 }}
                className="text-gray-700 text-base font-montserrat leading-relaxed"
              >
                <Trans
                  i18nKey="historySection.shortParagraph2"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.7 }}
                className="text-gray-700 text-base font-montserrat leading-relaxed italic"
              >
                "<Trans
                  i18nKey="historySection.quote"
                  components={{ b: <span className="text-pizza-red font-medium" /> }}
                />"
              </motion.p>
              <motion.p 
                variants={textParaLeft}
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                transition={{ delay: 0.8 }}
                className="text-gray-700 text-right text-sm font-montserrat"
              >
                - Paolo Di Pietro
              </motion.p>
            </div>
          </motion.div>

          {/* Immagine con animazioni potenziate e ottimizzate per mobile - entrata da destra */}
          <motion.div 
            ref={imageRef}
            variants={slideInRight}
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            transition={{ delay: 0.3 }}
            className="relative w-full h-[500px] md:h-[600px]"
          >
            {/* Effetti con stratificazione animati */}
            <motion.div 
              variants={rotateCard}
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-pizza-red rounded-2xl shadow-xl hover:rotate-[-1deg] transition-all duration-500"
            ></motion.div>
            <motion.div 
              variants={rotateCardInner}
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              transition={{ delay: 0.5 }}
              className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden hover:rotate-0 transition-all duration-500"
            >
              <div className="w-full h-full flex items-center justify-center">
                <OptimizedImage
                  src={molecolaAbout}
                  alt={t("historySection.image.alt")}
                  className="object-cover w-full h-full"
                  loading="eager"
                />
              </div>
            </motion.div>
            
            {/* Didascalia con animazione potenziata */}
            <motion.div 
              variants={captionVariant}
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 right-8 bg-white p-4 rounded-lg shadow-lg max-w-[250px] hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-pizza-brown font-medium font-montserrat flex items-center">
                <span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <FaPizzaSlice className="mr-2 text-pizza-red" />
                  </motion.div>
                </span>
                <Trans
                  i18nKey="historySection.image.caption"
                  components={{ b: <span className="text-pizza-red" /> }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;