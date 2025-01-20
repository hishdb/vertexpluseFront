import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import MenuBar from "../components/MenuBar";
import backgroundglobal from "../assets/CoverESGBackground.png";
import shapeImage1 from "../assets/itemListIcon.webp";
import shapeImage2 from "../assets/itemListIconWhiteEmpty.webp";
import phoneImage from "../assets/esg-indexes-phone.webp";
import Footer from "../components/Footer";
import CoverAnimationWithoutImage from "../components/CoverAnimationWithoutImage";
import WhatIsESGScoringAllAbout from "../components/WhatIsESGScroringAllAbout";
import esgBG from "../assets/esg-bg.webp"
import { useTranslation } from "react-i18next";

function ESG() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };

  // Ref for the animated section
  const animatedRef = useRef(null);

  // Check if the animated section is in view
  const isInView = useInView(animatedRef, { once: false });

  // Scroll animations setup for decorative elements
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, isInView ? -100 : 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, isInView ? -120 : 120]);

  const Y1 = useSpring(y1, springConfig);
  const Y2 = useSpring(y2, springConfig);


  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow">
        <CoverAnimationWithoutImage
          backgroundImage={backgroundglobal}
          text1={t("ESGScoring")}
          text2={t("")}
          text3={t("EnvironmentalSocialGovernance")}
        />
        <WhatIsESGScoringAllAbout />

        <div className="bg-blue-900 relative text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${esgBG})`,
          backgroundSize: 'cover', // Ensures the image covers the entire div
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        }}
        >
                {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-300/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start px-6 sm:px-12 md:px-16 lg:px-24 space-y-10 lg:space-y-0 lg:space-x-20" dir={isRTL ? "rtl" : "ltr"}>
            {/* Left Section */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-400">
                {t("WHYAREESGSCORES")}
              </h2>
              <p className="text-lg md:text-xl font-light">
                {t("InvestorsAnalyseCompanyESGScoreScreen")}
              </p>
              <ul className="space-y-4 text-lg md:text-xl font-medium">
                <li className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-sky-400">+</span>
                  <span>{t("GetInsightsIntoCompanyESGObjectives.")}</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-sky-400">+</span>
                  <span>{t("GoLongOrShortCFDsStocksUsingOurESGScoring.")}</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-sky-400">+</span>
                  <span>{t("MonitorCompanyESGScoreForChangesSustainability.")}</span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-sky-400">+</span>
                  <span>{t("MakeInformedDecisionsBasedCompany")}</span>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src={phoneImage}
                alt="Phone"
                className="w-full max-w-sm lg:max-w-md"
              />
            </div>
          </div>

        




          {/* Animated Decorative Elements */}
          <div
            ref={animatedRef}
            className="absolute right-0 top-0 h-full w-full pointer-events-none z-0 inset-0"
          >
            <motion.div
              style={{ y: Y1 }}
              className="absolute left-6 top-20 w-48 h-48 opacity-60 "
            >
              <img
                src={shapeImage2}
                alt="Shape Image 4"
                className="rotate-[100deg]"
              />
            </motion.div>

            <motion.div
              style={{ y: Y2 }}
              className="absolute right-20 top-1/2 w-60 h-60 opacity-70"
            >
              <img src={shapeImage1} alt="Shape Image 1" className="rotate-[20deg]"/>
            </motion.div>

        
          </div>
        </div>

        <div className="py-20 text-center"  dir={isRTL ? "rtl" : "ltr"}>
          {/* Heading Section */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-500 mb-6" >
              {t("INTUITIVEESGSCORINGWITHVertexPluse")}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              {t("UnderstandCompanyLevelSustainability")}
            </p>

            {/* Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 max-w-5xl mx-auto mb-12">
              <div>
                <h3 className="text-xl font-bold text-blue-900">{t("ESGTotalScore")}</h3>
                <p className="text-gray-700">
                  {t("TheAverageOfAllSubcategories")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">{t("MainCategoryScores")}</h3>
                <p className="text-gray-700">
                  {t("TheAverageOfTheirRelevantSubcategories.")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">{t("AllOurScores")}</h3>
                <p className="text-gray-700">
                  {t("EveryESGScoreIsBetween")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">{t("Industry ranking")}</h3>
                <p className="text-gray-700">
                  {t("LeaderAboveAverage")}
                </p>
              </div>
            </div>

          {/* Button Section */}
          <button
           onClick={() => window.location.href = "https://platform.vertexpluse.com"}
                className="relative overflow-hidden bg-blue-500 text-white font-semibold px-24 py-5 rounded-lg transition-colors duration-300 hover:bg-blue-600">
                <span className="relative z-10">{t("learnMore")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </button>

    </div>
      </main>
      <Footer />
    </div>
  );
}

export default ESG;
