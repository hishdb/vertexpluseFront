import { motion } from 'framer-motion';
import instrumentScreen2 from "../assets/instrument-screen2-en.webp";
import instrumentScreen1 from "../assets/instrument-screen1-en.webp";
import itemListIconWhite from "../assets/itemListIconWhite.webp";
import InsightsIcon from '@mui/icons-material/Insights';
import { useTranslation } from 'react-i18next';

function InsightsIntroductionSection ()  {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const features = [
    t("UncoverUniverseOfExclusive"),
    t("HarnessTheWisdomCrowd"),
    t("AnalyseTrendsAndSeeWhat")
  ];
  return (
    <div className="relative bg-trasnparent md:min-h-screen w-full overflow-hidden sm:mt-60 mt-0">
       {/* Decorative Background */}
      <div className="absolute inset-0 z-0 ">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="rotate(-2, 500, 300)">
            <rect
              x="160"
              y="20"
              width="850"
              height="450"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
              transform="translate(8, 8)"
            />
            <rect
              x="180"
              y="40"
              width="850"
              height="450"
              rx="16"
              ry="16"
              className="fill-blue-900"
            />
          </g>
        </svg>
      </div>
   
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-0 pt-10 sm:pt-28 pb-28 sm:px-8 lg:px-12">
      {/* Left Content */}
      <div className="text-white  md:w-1/2 space-y-14 p-8 mt-32 md:mt-0" dir={isRTL ? "rtl" : "ltr"}>
          {/* Title with responsive text size */}
          <span className="text-sky-500 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
              {t("Introducing")} <InsightsIcon style={{ fontSize: '3.5rem' }} /> {t("Insights")}
          </span>
        
          {/* List with responsive text size */}
          <ul className="space-y-6 pb-20">
              {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-8">
                      <img
                          src={itemListIconWhite}
                          width="28px"
                          height="28px"
                          className="flex-shrink-0 ml-4"
                      />
                      <p className="text-white font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                          {feature}
                      </p>
                  </li>
              ))}
          </ul>
      </div>


      {/* Right Content: two images - Centered and Responsive */}
      <div className="flex mb-8 mt-10 relative">
        <motion.div
          className="relative -right-0 transform shadow-2xl rounded-full sm:-right-20 md:-right-40 lg:-right-48 w-2/3 sm:w-1/2  md:w-[60%] lg:w-[80%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <img src={instrumentScreen2} />
        </motion.div>
        <motion.div
          className="absolute  shadow-2xl rounded-full right-16 sm:-right-20 md:-right-44 lg:-right-72  w-2/3 sm:w-1/2 md:w-[60%] lg:w-[80%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0.3, rotate: ['0deg', '14deg'] }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <img src={instrumentScreen1} />
        </motion.div>
      </div>
      </div>
    </div>
  );
};
    
export default InsightsIntroductionSection;
