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
    <div className="relative bg-trasnparent md:min-h-screen w-full overflow-hidden mt-60">
           {/* Decorative Background */}
      <div className="absolute inset-0 z-0 ">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="rotate(2, 500, 300)">
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
      <div className=" relative z-10 flex flex-col items-center max-w-7xl mx-auto px-0 pt-28 pb-28 sm:px-8 lg:px-12 bg-blue-900 sm:bg-transparent">
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
