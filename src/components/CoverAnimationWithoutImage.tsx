import shapeImage1 from "../assets/itemListIconWhite.png";
import shapeImage2 from "../assets/itemListIconWhite.png";
import { useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion";
import { useTranslation } from 'react-i18next';

// Define the type for the props
interface CoverAnimationWithoutImageProps {
  backgroundImage: string;
  text1: string;
  text2: string;
  text3: string;
}

function CoverAnimationWithoutImage ({ backgroundImage, text1, text2, text3 }: CoverAnimationWithoutImageProps)  {
  const { t } = useTranslation();
  const controls = useAnimation();

  // Scroll animations setup
  const { scrollY } = useScroll();
  
  // Transform values for floating elements
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -120]);
  const y3 = useTransform(scrollY, [0, 300], [0, -80]);
  
  // Spring configurations for smoother animations
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const springY1 = useSpring(y1, springConfig);
  const springY2 = useSpring(y2, springConfig);
  const springY3 = useSpring(y3, springConfig);

  // Button animation
  useEffect(() => {
    const startButtonAnimation = async () => {
      while (true) {
        await controls.start({
          scale: 1,
          boxShadow: "0 0 20px 0 rgba(59, 130, 246, 0.3)",
          transition: { duration: 1 }
        });
        await controls.start({
          scale: 0.95,
          boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
          transition: { duration: 1 }
        });
      }
    };
    startButtonAnimation();
  }, [controls]);

  return (
    <div
      className="relative bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "82vh",
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-300/50"></div>

      {/* Animated decorative elements */}
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
        <motion.div
          style={{ y: springY1 }}
          className="absolute left-0 top-4 w-48 h-48 opacity-50"
        >
          <img src={shapeImage2} alt="Shape Image 4" className="rotate-[80deg]" />
        </motion.div>

        <motion.div
          style={{ y: springY2 }}
          className="absolute -left-40 top-[60%] w-90 h-90 opacity-70"
        >
          <img src={shapeImage1} alt="Shape Image 1" className="rotate-[20deg]" />
        </motion.div>

        <motion.div
          style={{ y: springY3 }}
          className="absolute left-24 bottom-1/2 w-16 h-16 opacity-20"
        >
          <img src={shapeImage2} alt="Shape Image 4" />
        </motion.div>
      </div>

      {/* Content Wrapper */}
       <div className="relative  flex flex-col md:flex-row h-full items-center justify-center md:justify-between px-6 md:px-10">
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center  space-y-6 ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 leading-snug tracking-wide"
          >
            {text1}
            <br />
           {text2}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white max-w-3xl mx-auto leading-relaxed"
          >
            {text3}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-8"
          >
            <motion.button
              animate={controls}
              className="relative overflow-hidden bg-blue-500 text-white font-semibold px-28 py-3 md:py-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("StartTradingNow")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              className="relative overflow-hidden bg-transparent text-white border-2 border-white font-semibold px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-500 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("TryFreeDemo")}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverAnimationWithoutImage;
