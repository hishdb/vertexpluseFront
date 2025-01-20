import Footer from "../components/Footer";
import CoverAnimationWithoutImage from "../components/CoverAnimationWithoutImage";
import MenuBar from "../components/MenuBar";
import PaymentMethodsSection from "../components/PaymentMethodsSection";
import GlobalMarketsSectionWith2TextParameter from "../components/GlobalMarketsSectionWith2TextParameter.tsx";
import { useTranslation } from "react-i18next";
import WhyVertexPluse from "../components/WhyVertexpluse";
import TwoTexts from "../components/TwoTexts";
import HowDoITrade from "../components/HowDoITrade";
import DiveIntoExtensive from "../components/DiveIntoExtensive";
import { motion } from "framer-motion";
import { useEffect, useRef} from "react";
import backgroundglobal from "../assets/CoverBtcBackground.webp";

function Crypto() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!widgetContainerRef.current) return;

    widgetContainerRef.current.innerHTML = '';

    const widgetOuterContainer = document.createElement('div');
    widgetOuterContainer.className = 'tradingview-widget-container';

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';
    widgetContainer.style.height = '600px';
    widgetContainer.style.width = '100%';

    widgetOuterContainer.appendChild(widgetContainer);

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.type = 'text/javascript';
    script.async = true;

    const widgetConfig = {
      feedMode: 'market',
      market: 'crypto',
      isTransparent: true,
      displayMode: 'regular',
      width: '100%',
      height: '600',
      colorTheme: 'light',
      locale: 'en',
      enableScrolling: true,
      autosize: true,
      container_id: 'tradingview-widget',
    };

    script.innerHTML = JSON.stringify(widgetConfig);
    widgetContainer.id = 'tradingview-widget';

    widgetOuterContainer.appendChild(script);
    widgetContainerRef.current.appendChild(widgetOuterContainer);

    return () => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
    };
  }, []);
  
   const {t} = useTranslation();
    return (    
    <div className="flex flex-col min-h-screen">
    <MenuBar />
    <main className="flex-grow ">
    <CoverAnimationWithoutImage backgroundImage={backgroundglobal}  text1={t("BuySell")} text2={t("CryptocurrencyCdf")} text3={t("TradeTheWorldMostPopular")}/>  
    <PaymentMethodsSection/>
    <GlobalMarketsSectionWith2TextParameter text1={t("TradeCryptocurrenciesWithLeverage")} text2={t("TradeCryptocurrenciesDescription")} />
    
    <div className="bg-white text-blue-900 py-16 px-8 lg:px-24 max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {t("WhatIsCryptocurrency")}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              {t("Cryptocurrencies(Crypto)AreVirtual")}
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {t("ControlYourProfitsandLosses")}
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
          {t("PriceAlertsAndStops")}
          </p>
          <button 
           onClick={() => window.location.href = "https://platform.vertexpluse.com"}
          className="bg-blue-500 text-white font-medium px-20 py-3 rounded-md hover:bg-blue-600 transition duration-200">
            {t("learnMore")}
          </button>
          <div className="mt-6 text-gray-500 text-xs text-left">
          <p>
            {t("YouCanTradeCryptocurrenciesCFDs")}
          </p>
          <p>
            {t("YouDoNotOwnOrHaveAnyRights")}
          </p>
        </div>
          </div>

      
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {t("WhatAreTheBenefitsofCryptoCFDs")}
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold text-lg mr-2">
                  +
                </span>
                {t("hatAreTheBenefitsOfCryptoCFDsDetail.1")}
                <sup>1</sup>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold text-lg mr-2">
                  +
                </span>
                {t("hatAreTheBenefitsOfCryptoCFDsDetail.2")}<sup>2</sup>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-semibold text-lg mr-2">
                  +
                </span>
                {t("hatAreTheBenefitsOfCryptoCFDsDetail.3")}<sup>3</sup>
              </li>
            </ul>
          </div>
        </div>
    </div>

    <WhyVertexPluse/>  
    <TwoTexts text1={t("WhatIsCryptoTrading")} text2={t("TradingCryptoCFDInvolvesTheBuying")}/>

    <HowDoITrade
    title={t("HOWDOITRADECRYPTO?")}
    subtitle={t("StartTradingCryptoIn5SimpleSteps")}
    steps={[
      t("1.ChooseYourCryptoTradingMethod"),
      t("2.LearnAboutTheCryptoMarket"),
      t("3.OpenAndVerifyYourVertexPluseAccount"),
      t("4.PlanYourCryptoTradingStrategy"),
      t("5.StartTrading!"),
    ]}
    />
  
    <DiveIntoExtensive/>
     
    <h2 className="text-center pt-10 font-semibold text-sky-400 md:text-5xl sm:text-2xl lg:text-6xl">
    Related News & Market Insights</h2>

    <div
      ref={widgetContainerRef}
      className="tradingview-widget-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8 bg-gradient-to-b from-sky-100 to-white rounded-3xl shadow-2xl relative"
      style={{
        minHeight: '600px',
        overflow: 'hidden',
      }}
    />
     

        
        <div
            className="flex flex-col md:flex-row px-10 justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10 mb-32"
          >
            <motion.button
              className="relative overflow-hidden bg-blue-500 text-white font-semibold px-28 py-3 md:py-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "https://platform.vertexpluse.com/login"}
            >
              <span className="relative z-10">{t("StartTradingNow")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              className="relative overflow-hidden bg-transparent text-blue-500 border-2 border-blue-500 font-semibold px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "https://platform.vertexpluse.com/register"}
            >
              <span className="relative z-10">{t("TryFreeDemo")}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
      </div>
  
    </main>
    <Footer />

  </div>
    );
}

export default Crypto;