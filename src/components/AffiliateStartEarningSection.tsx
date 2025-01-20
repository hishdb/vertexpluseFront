import { useTranslation } from "react-i18next";
import StartEarningMoney from "../assets/StartEarningMoney.webp";

function AffiliateStartEarningSection() {
  const {t, i18n} = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <div className="relative w-full h-full flex sm:flex-row flex-col overflow-hidden bg-amber-100"
    dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Left side - Image */}
      <div className="sm:w-10/11 md:w-1/2 lg:w-1/2 w-10/11 flex  flex-col justify-center sm:items-start items-center p-8">
        <img
          src={StartEarningMoney}
          alt="Trading platform on mobile phone"
          className=" bg-cover "
        />
      </div>

      {/* Right side - Content */}
      <div className="sm:w-1/2 flex flex-col justify-center sm:items-start items-center p-8">
        <h2 className="text-[#001653] lg:text-4xl md:text-3xl sm:text-2xl font-bold  leading-tight">
          {t("StartEarningFrom")}<br />
          {t("YourTrafficToday")}
        </h2>

        <p className="text-gray-700 mb-8 mt-4 text-md">
          {t("MonetizeYourTraffic")}
        </p>

        <div className="space-y-5 sm:mb-12 mb-5">
          {/* High Conversion Tools Section */}
          <div>
            <h3 className="text-gray-800 text-xl font-semibold mb-2">
              {t("HighConversionTools")}
            </h3>
            <p className="text-gray-600">
              {t("OurMarketingSolutions")} <span className="text-blue-500 cursor-pointer">{t("MarketingSolutions")}</span>
              {t("CanEasilyHelpMaximize")}
            </p>
          </div>

          {/* Personal Support Section */}
          <div>
            <h3 className="text-gray-800 text-xl font-semibold ">
              {t("PersonalSupportGuidance")}
            </h3>
            <p className="text-gray-600">
              {t("EachAffiliateIs")}<br />
              <span className="text-blue-500 cursor-pointer">{t("ContactUs")}</span> {t("ForFurtherInformation")}
            </p>
          </div>
        </div>

        <button className="bg-[#FABC3F] text-[#001653]  px-12 py-4 rounded w-fit text-lg font-semibold hover:bg-opacity-90 transition-all">
          {t("JOINNOW")}
        </button>
      </div>
    </div>
  );
};

export default AffiliateStartEarningSection;
