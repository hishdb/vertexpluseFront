import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function VertexPluse3Packages() {
  const { t, i18n } = useTranslation();
  
  const isRTL = () => {
    const rtlLanguages = ['ar', 'fa', 'he', 'ur']; // Add more RTL language codes as needed
    return rtlLanguages.includes(i18n.language);
  };
  
  const cards = [
    {
      title: t("PackageTitle1"),
      duration: t("PackageDuration1"),
      interestRate: t("PackageInterestRate1"),
      investmentLimit: t("PackageInvestmentLimit1"),
      details: [
        t("PackageDetails1.1"),
        t("PackageDetails1.2"),
        t("PackageDetails1.3"),
      ],
      totalReturn: t("PackageTotalReturn1"),
      recommended: false,
      gradient: "bg-gradient-to-bl from-blue-400 via-blue-600 to-blue-700", // Starter gradient
    },
    {
      title: t("PackageTitle2"),
      duration: t("PackageDuration2"),
      interestRate: t("PackageInterestRate2"),
      investmentLimit: t("PackageInvestmentLimit2"),
      details: [
        t("PackageDetails2.1"),
        t("PackageDetails2.2"),
        t("PackageDetails2.3"),
        t("PackageDetails2.4"),
      ],
      totalReturn: t("PackageTotalReturn2"),
      recommended: true,
      gradient: "bg-gradient-to-bl from-gray-400 via-gray-600 to-gray-700 ", // Silver gradient
    },
    {
      title: t("PackageTitle3"),
      duration: t("PackageDuration3"),
      interestRate: t("PackageInterestRate3"),
      investmentLimit: t("PackageInvestmentLimit3"),
      details: [
        t("PackageDetails3.1"),
        t("PackageDetails3.2"),
        t("PackageDetails3.3"),
      ],
      totalReturn: t("PackageTotalReturn3"),
      recommended: false,
      gradient: "bg-gradient-to-bl from-yellow-400 via-yellow-600 to-yellow-700", // Premium gradient
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.1, rotate: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative overflow-hidden bg-transparent mt-40 pb-40 " dir={isRTL() ? "rtl" : "ltr"}>
      {/* Decorative Background */}
      <motion.div
        className="absolute inset-0 z-0 mt-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice">
          <g transform="rotate(-5, 500, 300)">
            <rect
              x="160"
              y="20"
              width="300"
              height="300"
              rx="16"
              ry="16"
              className="fill-blue-900/10"
              transform="translate(8, 8)"
            />
            <rect
              x="200"
              y="60"
              width="300"
              height="300"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
            />
          </g>
        </svg>
      </motion.div>
      <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl lg:text-4xl font-normal text-blue-950"  dir={isRTL() ? "rtl" : "ltr"}
        >
          {t("Popular")}
          <br />
          <span className="text-blue-400 font-semibold text-3xl md:text-4xl lg:text-5xl" dir={isRTL() ? "rtl" : "ltr"}>
            {t("InvestmentPlans")}
          </span>
        </motion.h2>

      {/* Card Section */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-12 px-6 py-16"    dir={isRTL() ? "rtl" : "ltr"}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`relative w-full max-w-md ${card.gradient} p-6 lg:p-8 rounded-xl shadow-2xl text-white`}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            dir={isRTL() ? "rtl" : "ltr"}
            viewport={{ once: true }}
          >
         

            {/* Recommended Badge */}
            {card.recommended && (
              <div className="absolute -top-4 right-4 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                {t("RECOMMENDED")}
              </div>
            )}

            {/* Card Title */}
            <h3 className="text-2xl font-bold text-white z-10">{card.title}</h3>

            {/* Card Details */}
            <div className="flex justify-between items-center mt-4 mb-6">
              <p className="text-white text-2xl font-bold z-10">{card.duration}</p>
              <div className="text-white text-sm flex items-center space-x-1 z-10">
                <span>{t("InterestRate")}</span>
                <span className="text-white font-bold" dir={isRTL() ? "rtl" : "ltr"}>{card.interestRate}</span>
              </div>
            </div>
            <div className="border-t border-gray-600 pt-4 space-y-3">
              <p className="text-sm text-white font-semibold z-10">
                { t("InterestRate")}{" "}
                <span className="font-bold">{card.investmentLimit}</span>
              </p>
              {card.details.map((detail, detailIndex) => (
                <p
                  key={detailIndex}
                  className="text-sm text-gray-300 z-10" dir={isRTL() ? "rtl" : "ltr"}
                >
                  {detail}
                </p>
              ))}
              <p className="text-sm text-white font-semibold pt-2 z-10">
                {t("TotalReturn")} <span className="font-bold">{card.totalReturn}</span>
              </p>
            </div>

            {/* Invest Button */}
            <motion.button
              className="mt-6 px-6 py-3 w-full bg-white text-blue-800 font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {t("InvestNow")}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default VertexPluse3Packages;
