import { useTranslation } from "react-i18next";
import tradingIcon from "../assets/tradingIcon.png";

function HowDoI() {
  const {t} = useTranslation();

  return (
    <div className="relative min-h-screen w-full overflow-hidden mt-40">
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
              height="350"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
              transform="translate(8, 8)"
            />
            <rect
              x="180"
              y="40"
              width="850"
              height="350"
              rx="16"
              ry="16"
              className="fill-blue-900"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-24  bg-blue-900 sm:bg-transparent">
      <div className="mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Icon */}
        <div className="flex justify-center md:justify-start md:mr-12 mb-8 md:mb-0">
          <img
            src={tradingIcon}
            alt="Trading Icon"
            className="w-40 h-40 lg:w-56 lg:h-56"
          />
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col space-y-8 text-center md:text-left">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-400">
             {t("HOWDOITRADECRYPTO?")}
          </h2>
          <p className="text-lg md:text-3xl font-extrabold text-white font-medium">
            {t("StartTradingCryptoIn5SimpleSteps")}
          </p>
          <ul className="space-y-6 text-base md:text-2xl text-gray-200">
            <li>{t("1.ChooseYourCryptoTradingMethod")}</li>
            <li>{t("2.LearnAboutTheCryptoMarket")}</li>
            <li>{t("3.OpenAndVerifyYourPlus500Account")}</li>
            <li>{t("4.PlanYourCryptoTradingStrategy")}</li>
            <li>{t("5.StartTrading!")}</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HowDoI;
