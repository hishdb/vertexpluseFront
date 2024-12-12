import backgroundglobal from "../assets/CryptoBackground.png";
import shapeImage1 from "../assets/shapeObject1.png";
import shapeImage2 from "../assets/shapeObject2.png";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

function DiveIntoExtensive ()  {   
  const {t} = useTranslation();


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
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
        <motion.div
       
          className="absolute left-0 top-4 w-48 h-48 opacity-60"
        >
          <img src={shapeImage2} alt="Shape Image 4" className="rotate-[40deg]" />
        </motion.div>

        <motion.div
         
          className="absolute -left-60 top-1/2 w-106 h-106 opacity-70"
        >
          <img src={shapeImage1} alt="Shape Image 1" />
        </motion.div>

        <motion.div
    
          className="absolute left-8 bottom-1/2 w-16 h-16 opacity-30"
        >
          <img src={shapeImage2} alt="Shape Image 4" className="rotate-[240deg]" />
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