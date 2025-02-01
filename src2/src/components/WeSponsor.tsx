import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import legiaWarsaw from "../assets/legia-Warsaw.webp";
import chicagoBulls from "../assets/chicago-bulls.webp";
import youngBoys from "../assets/youngboys.webp";
import sponsorbulls from "../assets/sponsorship-logo-bulls-back.svg"
import sponsorLegia from "../assets/sponsorship-logo-legia-back.svg"
import sponsorYoungBoys from "../assets/sponsorship-logo-young-boys-back.svg"
import { useTranslation } from 'react-i18next';

function WeSponsor() {
  const {t} = useTranslation();
  const [selectedJersey, setSelectedJersey] = useState<{
    src: string;
    src2: string;
    alt: string;
    label: string;
    description: string;
  } | null>(null);

  const jerseys = [
    {
      src: legiaWarsaw,
      src2: sponsorLegia,
      alt: "Legia Warsaw",
      label: "Legia Warsaw",
      description: "Pioneering football excellence in Poland's premier league."
    },
    {
      src: chicagoBulls,
      src2: sponsorbulls,
      alt: "Chicago Bulls",
      label: "Chicago Bulls",
      description: "Legendary NBA team that redefined basketball in the 90s."
    },
    {
      src: youngBoys,
      src2: sponsorYoungBoys,
      alt: "BSC Young Boys",
      label: "BSC Young Boys",
      description: "Swiss football powerhouse with a rich competitive history."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -3, 3, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative bg-transparent py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-14">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl lg:text-4xl font-normal text-blue-950">
          {t("We")}
          <br />
          <span className="text-blue-400 font-semibold text-3xl md:text-4xl lg:text-5xl">
            {t("Sponsor")}
          </span>
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24 items-center">
          {jerseys.map((jersey, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedJersey(jersey)}
              className="flex flex-col items-center cursor-pointer group">
              <motion.img
                src={jersey.src}
                alt={jersey.alt}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              />
              <motion.img
                src={jersey.src2}
                alt={jersey.alt}
                className="w-12 h-12 sm:w-24 sm:h-24 md:w-30 md:w-30 lg:w-30 lg:w-30  mt-4 opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedJersey && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setSelectedJersey(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedJersey.src}
                alt={selectedJersey.label}
                className="mx-auto mb-6 w-64 h-auto"
              />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {selectedJersey.label}
              </h3>
              <p className="text-gray-600">
                {selectedJersey.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WeSponsor;