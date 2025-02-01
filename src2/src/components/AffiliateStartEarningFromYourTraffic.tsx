import { useTranslation } from "react-i18next";

function AffiliateStartEarningFromYourTraffic () {

    const {t, i18n} = useTranslation();
    const isRTL = i18n.language === "ar";
  return (
    <div 
    dir={isRTL ? "rtl" : "ltr"}
    className="relative w-full h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500  to-blue-950 " >
      {/* Yellow decorative line */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2">
        <div className="w-12 h-1 bg-[#FABC3F]" />
      </div>

      {/* Main content */}
      <div className="text-center">
        <h1 className="text-white lg:text-6xl md:text-5xl sm:text-2xl  font-bold italic mb-8">
          {t("StartEarningFromYourTraffic")}
        </h1>
        
        <button
         onClick={() => window.location.href = "https://platform.vertexpluse.com/register"}
        className="bg-[#FABC3F] text-[#001A6E] px-12 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
          {t("JOINNOW")}
        </button>
      </div>

   
    </div>
  );
};

export default AffiliateStartEarningFromYourTraffic;

