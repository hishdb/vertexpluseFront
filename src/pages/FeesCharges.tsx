import MenuBar from '../components/MenuBar';
import backgroundglobal from "../assets/CoverFeesChargesBackground.png";
import zerofees from "../assets/zero-fees.svg";
import zerofeesWithPresentage from "../assets/ZerofeeswithPersentage.png";
import tradingInfoImage from "../assets/trading-info.webp"; // Add your trading info image
import clockImage from "../assets/clock-image.webp"; // Add your clock image
import { useTranslation } from "react-i18next";
import CoverAnimationWithoutImage from '../components/CoverAnimationWithoutImage';
import itemListIcon from "../assets/itemListIcon.png";
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

function FeesCharges() {
    const { t, i18n } = useTranslation();
    const faqData = [
        {
          question: t("FeesCharges.q1"),
          answer: t("FeesCharges.a1"),
        },
        {
          question: t("FeesCharges.q2"),
          answer: t("FeesCharges.a2"),
        },
        {
          question: t("FeesCharges.q3"),
          answer: t("FeesCharges.a3"),
        },
        {
          question: t("FeesCharges.q4"),
          answer: t("FeesCharges.a4"),
        },
      ];
    const isRTL = i18n.language === 'ar';
  return (
     <div className="flex flex-col min-h-screen">
    <MenuBar />
    
    <main className="flex-grow ">
    <CoverAnimationWithoutImage backgroundImage={backgroundglobal}  text1={t("OurFeesAndCharges")} text2={t("")} text3={t("CompetitiveStraightforwardAndWithNo")}/>  
    {/* Trade and pay 0 fees for */}
    <div className="flex items-center justify-center mb-16 mt-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-sky-500 text-center">
          {t("TRADEANDPAY0FEESFOR")}
        </h1>
        <div className="flex flex-wrap items-center">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={zerofees}
              alt={t("Zero")}
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Section - Text */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-start">
            <ul className="mt-8 space-y-10 text-lg md:text-xl lg:text-2xl font-normal text-blue-900">
              <li className="flex items-center">
                <img
                  src={itemListIcon}
                  width="30px"
                  height="30px"
                  className="flex-shrink-0"
                />
                <span className="ml-4">{t("Deposits")}</span>
              </li>
              <li className="flex items-center">
                <img
                  src={itemListIcon}
                  width="30px"
                  height="30px"
                  className="flex-shrink-0"
                />
                <span className="ml-4">{t("LiveShareCFDPrices")}</span>
              </li>
              <li className="flex items-center">
                <img
                  src={itemListIcon}
                  width="30px"
                  height="30px"
                  className="flex-shrink-0"
                />
                <span className="ml-4">{t("RealTimeForexQuotes")}</span>
              </li>
              <li className="flex items-center">
                <img
                  src={itemListIcon}
                  width="30px"
                  height="30px"
                  className="flex-shrink-0"
                />
                <span className="ml-4">{t("OpeningClosingTrades")}</span>
              </li>
              <li className="flex items-center">
                <img
                  src={itemListIcon}
                  width="30px"
                  height="30px"
                  className="flex-shrink-0"
                />
                <span className="ml-4">{t("DynamicChartsAndGraphs")}</span>
              </li>
              <li className="flex items-center">
                <img
                  src={itemListIcon}
                  width="30px"
                  height="30px"
                  className="flex-shrink-0"
                />
                <span className="ml-4">{t("RollingYourPosition")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Buy/Sell Spreads Section */}
    <div className="flex flex-wrap items-center bg-blue-900 text-white px-8 md:px-40 lg:px-40 py-20">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">
          {t("BuySellSpreads")}
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          {t("VertexPluseCompensatedDescription")}
        </p>
        <p className="mt-6 text-lg md:text-xl">
          {t("ViewSpreadInstructions")}
        </p>
        <ol className="list-decimal ml-6 mt-4 space-y-2 text-lg md:text-xl">
          <li>{t("LogInToYourAccount")}</li>
          <li>{t("SearchSpecificInstrument")}</li>
          <li>{t("SelectDetailsIcon")}</li>
        </ol>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={tradingInfoImage}
          alt={t("TradingInfo")}
          width="500px"
        />
      </div>
    </div>

    {/* Additional Fees Section */}
    <div className="relative px-4 py-16 bg-gray-50 pt-40 pb-40">
    <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
        {/* Clock Image Container */}
        <div className="w-full md:w-7/12 relative z-0">
            <img
            src={clockImage}
            alt={t("ClockImage")}
            className="max-w-full h-auto"
            />
        </div>
        
        {/* Additional Fees Card - Positioned to overlap */}
        <div className="w-full md:w-7/12 md:absolute md:right-4 lg:right-20 relative z-10">
            <div className="bg-white shadow-lg rounded-lg border border-cyan-500 text-slate-500 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-500 mb-6">
              {t("AdditionalFees")}
            </h2>
            <p className="text-lg md:text-xl mb-4">
              {t("FeesBelowCouldApply")}
            </p>
            <ul className="space-y-6 text-lg md:text-xl">
                <li>
                <strong className="text-sky-400 font-normal">{t("OvernightFunding")}</strong>
                <p>
                  {t("OvernightFundingDescription")} <a href="#" className="text-blue-400 underline">{t("LearnMore")}</a>.
                </p>
                </li>
                <li>
                <strong className="text-sky-400 font-normal">{t("CurrencyConversionFee")}</strong>
                <p>
                  {t("CurrencyConversionFeeDescription")} <a href="#" className="text-blue-400 underline">{t("LearnMore")}</a>.
                </p>
                </li>
                <li>
                <strong className="text-sky-400 font-normal">{t("GuaranteedStopOrder")}</strong>
                <p>
                  {t("GuaranteedStopOrderDescription")} <a href="#" className="text-blue-400 underline">{t("LearnMore")}</a>.
                </p>
                </li>
                <li>
                <strong className="text-sky-400 font-normal">{t("InactivityFee")}</strong>
                <p>
                  {t("InactivityFeeDescription")}
                </p>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </div>
    {/* Deposits and Withdrawals */ }
    <div className="flex flex-wrap items-center bg-blue-900 text-white px-8 md:px-40 lg:px-40 py-20">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">
          {t("DepositsAndWithdrawals")}
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          {t("NoDepositWithdrawalFees")}
        </p>
        <p className="mt-6 text-lg md:text-xl">
          {t("BestTradingConditions")}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={zerofeesWithPresentage}
          alt={t("TradingInfo")}
          width="500px"
        />
      </div>
    </div>
    <FAQ
      title={t("FAQ")}
      faqs={faqData}
    />
    </main>
    
    <Footer />

</div>
  );
}

export default FeesCharges;
