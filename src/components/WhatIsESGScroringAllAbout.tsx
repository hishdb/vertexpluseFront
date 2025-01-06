import invironmental from "../assets/icon-environmental.svg";
import social from "../assets/icon-social.svg";
import governance from "../assets/icon-governance.svg";
import { useTranslation } from "react-i18next";


function WhatIsESGScoringAllAbout() {
  const { t, i18n } = useTranslation(); 
  const isArabic = i18n.language === "ar"; 
  const features = [
    {
      title: t("Environmental"),
      description: t("ACompanyEnvironmentallyFriendlyPracticesTowardsLowCarbonFootprint"),
      icon: invironmental, // Using the imported image
    },
    {
      title: t("Social"),
      description: t("HowCompanyMakesAnImpactInSociety"),
      icon: social, // Using an emoji as a placeholder
    },
    {
      title: t("Governance"),
      description: t("TheStandardsOfCompanyManagement"),
      icon: governance, // Using an emoji as a placeholder
    }
  ];

  return (
    <div className="relative min-h-screen w-full mt-40">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-24 bg-blue-900 sm:bg-transparent ">
            <div className="flex flex-col items-center mb-10">
            <h2
            className={`text-center text-sky-400 text-5xl font-semibold`}
            dir={isArabic ? "rtl" : "ltr"}>
            {t("WhatIsESGScoringAllAbout")}
        </h2>
        <p
            className={`text-center text-white text-lg font-medium mt-4 max-w-2xl`}
            dir={isArabic ? "rtl" : "ltr"}>
            {t(
            "AnESGScoreMeasuresCompanysSustainability"
            )}
        </p>
        
        </div>


       
   

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-white p-2 rounded-lg flex flex-col items-center"
            >
              {/* Icon */}
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-20 h-20 mb-8"
                />
             
              {/* Title */}
              <h3 className="text-3xl font-normal mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-lg  text-center ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
        <button
            className="relative overflow-hidden bg-blue-500 text-white font-semibold px-24 py-5 rounded-lg transition-colors duration-300 hover:bg-blue-600"
        >
            <span className="relative z-10">{t("StartTradingNow")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <button
            className="relative overflow-hidden bg-transparent border-2 border-white text-white font-semibold px-24 py-5 rounded-lg transition-colors duration-300 hover:bg-white hover:text-blue-500 group"
        >
            <span className="relative z-10">{t("TryFreeDemo")}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
        </div>

     
      </div>
    </div>
  );
}

export default WhatIsESGScoringAllAbout;
