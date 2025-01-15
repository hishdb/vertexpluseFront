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
                <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="1" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
            </linearGradient>
            
            <pattern id="smallDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" opacity="0.1"/>
            </pattern>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g transform="rotate(2, 500, 300)">
            <rect
              x="100"
              y="20"
              width="950"
              height="400"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
              transform="translate(8, 8)"
            />
            <rect
              x="100"
              y="40"
              width="950"
              height="400"
              rx="16"
              ry="16"
              className="fill-blue-900"
            />
            <rect
              x="100"
              y="40"
              width="950"
              height="500"
              rx="16"
              ry="16"
              fill="url(#smallDots)"
            />
             <path
              d="M120 60 Q 570 20, 1020 60"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.1"
            />
            
            <path
              d="M120 520 Q 570 560, 1020 520"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.1"
            />
                  <circle cx="150" cy="90" r="30" fill="white" opacity="0.03"/>
            <circle cx="1000" cy="490" r="40" fill="white" opacity="0.03"/>
            
            <g opacity="0.07">
              <line x1="200" y1="40" x2="200" y2="540" stroke="white" strokeWidth="1"/>
              <line x1="400" y1="40" x2="400" y2="540" stroke="white" strokeWidth="1"/>
              <line x1="600" y1="40" x2="600" y2="540" stroke="white" strokeWidth="1"/>
              <line x1="800" y1="40" x2="800" y2="540" stroke="white" strokeWidth="1"/>
            </g>

            <path
              d="M100 290 L1050 290"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray="5,5"
              opacity="0.1"
            />
            
            <circle cx="120" cy="60" r="4" fill="white" opacity="0.2" filter="url(#glow)"/>
            <circle cx="1030" cy="60" r="4" fill="white" opacity="0.2" filter="url(#glow)"/>
            <circle cx="120" cy="520" r="4" fill="white" opacity="0.2" filter="url(#glow)"/>
            <circle cx="1030" cy="520" r="4" fill="white" opacity="0.2" filter="url(#glow)"/>
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
