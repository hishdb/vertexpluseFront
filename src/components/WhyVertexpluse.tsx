import ProtectedSecure from "../assets/ProtectedSecureIcon.png";
import supportIcon from "../assets/supportIcon2.png";
import regulatedIcon from "../assets/regulatedIcon.png";
import reliable from "../assets/reliable.png";
import { useTranslation } from "react-i18next";


function WhyVertexPluse() {
  const { t, i18n } = useTranslation(); 
  const isArabic = i18n.language === "ar"; 
  const features = [
    {
      title: t("ProtectedSecureTitle"),
      description: t("ProtectedSecureDescription"),
      icon: ProtectedSecure, // Using the imported image
    },
    {
      title: t("ProfessionalSupportTitle"),
      description: t("ProfessionalSupportDescription"),
      icon: supportIcon, // Using an emoji as a placeholder
    },
    {
      title: t("RegulatedTitle"),
      description: t("RegulatedDescription"),
      icon: regulatedIcon, // Using an emoji as a placeholder
    },
    {
      title: t("ReliableTitle"),
      description: t("ReliableDescription"),
      icon: reliable, // Using an emoji as a placeholder
    },
  ];

  return (
    <div className="relative bg-trasnparent min-h-screen  w-full overflow-hidden mt-60">
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
          <g transform="rotate(-2, 500, 300)">
            <rect
              x="100"
              y="20"
              width="950"
              height="500"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
              transform="translate(8, 8)"
            />
            <rect
              x="100"
              y="40"
              width="950"
              height="500"
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
      <div className=" relative z-10 flex flex-col items-center max-w-7xl mx-auto px-0 pt-28 pb-28 sm:px-8 lg:px-12 mb-6 sm:mb-0 ">
      <h2 className={`text-center text-blue-500 text-2xl md:text-4xl lg:text-5xl  font-semibold mb-10`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {t("WHYVERTEXPLUSE?")}
      </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-2 xl:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-white p-2 rounded-lg flex flex-col items-center md:items-start"
            >
              {/* Icon */}
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-16 h-16 mb-4"
                />
             
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-md md:text-xl sm:text-md text-center font-light md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyVertexPluse;
