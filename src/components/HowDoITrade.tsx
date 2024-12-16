import { useTranslation } from "react-i18next";
import tradingIcon from "../assets/tradingIcon.png";

// Define the interface for the props
interface HowDoITradeProps {
  title: string;
  subtitle: string;
  steps: string[];
}

const HowDoITrade: React.FC<HowDoITradeProps> = ({ title, subtitle, steps }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if the current language is Arabic

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden mt-40"
      dir={isArabic ? "rtl" : "ltr"} // Dynamically set text direction
    >
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-24 bg-blue-900 sm:bg-transparent">
        <div
          className={`mx-auto flex flex-col md:flex-row items-center space-x-0 md:space-x-24`}
        >
          {/* Left Section: Icon */}
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src={tradingIcon}
              alt="Trading Icon"
              className="w-40 h-40 lg:w-56 lg:h-56"
            />
          </div>

          {/* Right Section: Text */}
          <div
            className={`flex flex-col space-y-8 sm:text-left md:text-${
              isArabic ? "right" : "left"
            }`}
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-400">
              {title}
            </h2>
            <p className="text-lg md:text-3xl font-extrabold text-white font-medium">
              {subtitle}
            </p>
            <ul className="space-y-6 text-base md:text-2xl text-gray-200">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoITrade;
