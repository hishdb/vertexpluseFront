import Footer from "../components/Footer";
import CoverAnimationWithoutImage from "../components/CoverAnimationWithoutImage";
import MenuBar from "../components/MenuBar";
import PaymentMethodsSection from "../components/PaymentMethodsSection";
import GlobalMarketsSectionWithParameters from "../components/GlobalMarketsSectionWith2TextParameter";
import { useTranslation } from "react-i18next";
import WhyVertexPluse from "../components/WhyVertexpluse";
import TwoTexts from "../components/TwoTexts";
import HowDoITrade from "../components/HowDoITrade";
import DiveIntoExtensive from "../components/DiveIntoExtensive";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import backgroundglobal from "../assets/backgroundglobal.jpg";
import FAQ from "../components/FAQ";



function ETFS() {
    const controls = useAnimation();
    useEffect(() => {
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
      script.type = 'text/javascript';
      script.async = true;
  
      // Configure widget settings
      script.innerHTML = JSON.stringify({
        feedMode: "all_market",
        isTransparent: true,
        displayMode: "regular",
        width: "100%",
        height: "100%",
        colorTheme: "light",
        locale: "en"
      });
  
      // Create widget container
      const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
      if (widgetContainer) {
        widgetContainer.appendChild(script);
      }
  
      return () => {
        // Cleanup script when component unmounts
        if (widgetContainer && widgetContainer.contains(script)) {
          widgetContainer.removeChild(script);
        }
      };
    }, []);
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
    const {t} = useTranslation();
    const faqData = [
      {
        question: t("ETFsFaq.q1"),
        answer: t("ETFsFaq.a1"),
      },
      {
        question: t("ETFsFaq.q2"),
        answer: t("ETFsFaq.a2"),
      },
      {
        question: t("ETFsFaq.q3"),
        answer: t("ETFsFaq.a3"),
      },
      {
        question: t("ETFsFaq.q4"),
        answer: t("ETFsFaq.a4"),
      }
    ];

    return (    
    <div className="flex flex-col min-h-screen">
    <MenuBar />
    
    <main className="flex-grow ">
   
      <CoverAnimationWithoutImage backgroundImage={backgroundglobal}   text1={t("ETFsCFDsTrading")} text2={t("")} text3={t("TradeOnTheMostPopularExchangeTradedFunds")}/>  
      <PaymentMethodsSection/>
    <GlobalMarketsSectionWithParameters text1={t("TradeETFsWithLeverage")} text2={t("TradeOnTheETFsMarketWithUpToLeverage")} />
      
          <div className="bg-white text-blue-900 py-16 px-8 lg:px-24 max-w-7xl mx-auto flex flex-col items-center">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {t("AdvancedTechnicalAnalysisTools")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                {t("GetFREERealTimeStreamingQuotes")}
              </p>
              
            <button className="bg-blue-500 text-white font-medium px-20 py-3 rounded-md hover:bg-blue-600 transition duration-200">
              {t("learnMore")}
            </button>
            <div className="mt-6 text-gray-500 text-xs text-left">
          
          </div>
            </div>

       
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {t("ProfessionalCustomerSupport")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                {t("VertexPluseCustomersEnjoyHighStandardCustomer")}
              </p>
            </div>
          </div>
        </div>

      <WhyVertexPluse/>  
      <TwoTexts text1={t("WhatIsETFsTrading")} text2={t("ETFCFDTradingInvolvesBuyingAndSellingContracts")}/>
      
      <HowDoITrade
      title={t("HowDoITradeETFs")}
      subtitle={t("StartTradingETFsIn5SimpleSteps")}
      steps={[
        t("1.ChooseYourETFsTradingMethod"),
        t("2.LearnAboutTheETFsMarket"),
        t("3.OpenAndVerifyYourVertexpluseAccount"),
        t("4.PlanYourETFsTradingStrategy"),
        t("5.StartTrading!"),
      ]}
    />
      <DiveIntoExtensive/>
      <FAQ
      title={t("ETFsFAQ")}
      faqs={faqData}
    />
                     <h2 className="text-center pt-10 font-semibold text-sky-400 md:text-5xl sm:text-2xl lg:text-6xl">
        Related News & Market Insights</h2>

        <div className="tradingview-widget-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8  bg-gradient-to-b from-sky-100 to-white rounded-3xl shadow-2xl">
      <div className="tradingview-widget-container__widget h-[600px]"></div>
      </div>

      <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row px-10 justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10 mb-32"
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
              className="relative overflow-hidden bg-transparent text-blue-500 border-2 border-blue-500 font-semibold px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("TryFreeDemo")}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
      </motion.div>
         
    </main>
    
      <Footer />

  </div>
    );
}

export default ETFS;