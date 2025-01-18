import { useTranslation } from "react-i18next";
import logo from "../assets/vertexpluseWhite.png";
import workingLaptop from "../assets/workingLaptop.jpg";

function AffiliateHero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="relative h-full w-full overflow-hidden bg-amber-400">
      {/* Background Shapes */}
      <div className="absolute inset-0 flex">
        {/* Blue diagonal section */}
        <div className="relative sm:w-[60%] w-[100%]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500  to-blue-950 transform sm:-skew-x-12 -skew-x-0 origin-top-right" />
          <div className="absolute right-0 h-full w-20 sm:w-24 bg-amber-100 sm:bg-amber-400 transform sm:-skew-x-12 -skew-x-0 translate-x-12 origin-top-right" />
        </div>
        {/* Image section */}
        <div className="relative w-[40%] hidden sm:block ">
          <img 
            src={workingLaptop}
            alt="Person working on laptop"
            className="h-full w-full object-cover -skew-x-12 "
          />
        </div>
      </div>

      {/* Content */}
      <div 
        className={`relative z-10  h-full  mx-auto ${isRTL ? 'rtl' : 'ltr'}`}
      >
        <div className="h-full flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 w-full md:w-1/2">
          {/* Logo and Program text */}
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={logo}
              alt="Vertex Logo" 
              className="h-6 md:h-8"
            />
            <span className="text-white text-lg md:text-2xl font-light">
              {t("AffiliateProgram")}
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-amber-400 text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-xl">
            {t("YOURTRAFFICWORKSFORYOU")}
          </h1>
          
          {/* CTA Button */}
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-all w-fit">
            {t("JOINNOW")}
          </button>

        </div>
      </div>
    </div>
  );
}

export default AffiliateHero;