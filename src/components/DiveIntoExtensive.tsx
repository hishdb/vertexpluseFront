import backgroundglobal from "../assets/CryptoBackground.webp";
import shapeImage1 from "../assets/itemListIconWhiteEmpty.webp";
import shapeImage2 from "../assets/itemListIconWhite.webp";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslation } from 'react-i18next';

function DiveIntoExtensive ()  {   
  const {t} = useTranslation();
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

  return(
    <div
      className="relative bg-cover bg-center bg-blue-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundglobal})`,
        height: "60vh",
      }}
    >
    {/* Enhanced gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500/50"></div>

      {/* Animated decorative elements */}
  {/* Animated decorative elements */}
  <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
        <motion.div
          style={{ y: springY1 }}
          className="absolute left-0 top-2 w-40 h-40 opacity-50"
        >
          <img src={shapeImage2} alt="Shape Image 4" className="rotate-[80deg]" />
        </motion.div>

        <motion.div
          style={{ y: springY2 }}
          className="absolute -left-10 top-[80%] w-60 h-60 opacity-70"
        >
          <img src={shapeImage1} alt="Shape Image 1" className="rotate-[20deg]" />
        </motion.div>

        <motion.div
          style={{ y: springY3 }}
          className="absolute left-24 bottom-[40%] w-16 h-16 opacity-10"
        >
          <img src={shapeImage2} alt="Shape Image 4"  />
        </motion.div>
      </div>

      {/* Content Wrapper */}
       <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center md:justify-between px-6 md:px-10 ">
        <div className="w-full h-full flex justify-center items-center">
          <div className=" text-center "> 
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-white  mx-auto leading-relaxed"
          >
            {t("DIVEINTOEXTENSIVELEARNINGWITHOUR")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-200 leading-snug tracking-wide"
          >
           
           {t("Trading Academy")}
          </motion.h1>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-center  md:space-x-6 mt-8"
          >
     

            <motion.button
              className="relative overflow-hidden bg-white text-blue-600 border-2 border-blue-600 font-semibold px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("LearnAboutTrading")}</span>
            </motion.button>
          </motion.div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default DiveIntoExtensive;