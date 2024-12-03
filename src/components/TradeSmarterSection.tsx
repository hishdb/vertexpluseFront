import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import iconcheck from "../assets/icon-check.svg";
import iconknowledgecdf from "../assets/icon-knowledgecdf.svg";
import iconstartegy from "../assets/icon-strategy.svg";
import forexTrading from "../assets/ForexTrading.webp";

function TradeSmarterSection() {
  const features = [
    {
      title: "Practice your strategy",
      description:
        "Try our free demo account before you open a real trading account to explore our intuitive platform.",
      buttonLabel: "Try now",
      icon: iconcheck,
    },
    {
      title: "Expand your knowledge",
      description:
        "Learn about trading CFDs with Plus500 using our comprehensive educational materials.",
      buttonLabel: "Enter Trading Academy",
      icon: iconknowledgecdf,
    },
    {
      title: "Manage your risk",
      description:
        "Use our advanced financial risk management tools to effectively limit your losses and lock.",
      buttonLabel: "Read more",
      icon: iconstartegy,
    },
  ];

  // Create a ref for the motion image section
  const imageRef = useRef(null);

  // Detect if the image section is in view
  const isInView = useInView(imageRef, { once: true });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 from-5% via-blue-800 to-transparent overflow-hidden mt-40">
      {/* Content */}
      <div className="relative z-10 text-white max-w-7xl mx-auto space-y-14 py-16 md:py-24 px-6 sm:px-10 lg:px-50">
        {/* Title */}
        <h2 className="text-center text-2xl md:text3xl lg:text-4xl font-normal text-white">
          Trade
          <br />
          <span className="text-blue-400 font-semibold text-3xl md:text4xl lg:text-5xl">
            SMARTER
          </span>
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-8 bg-transparent"
            >
              {/* Icon */}
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-md md:text-lg lg:text-xl text-blue-200 max-w-md ">
                {feature.description}
              </p>
              {/* Button */}
              <div className="w-full flex justify-center">
                <motion.button
                  className="text-md md:text-md lg:text-lg relative overflow-hidden bg-white text-blue-900 font-semibold px-6 md:px-10 lg:px-12 py-3 rounded-lg transition-colors duration-500 hover:bg-blue-600 hover:text-white"
                  style={{ width: "300px" }} // Ensures all buttons have the same width
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{feature.buttonLabel}</span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Motion image */}
      <div
        ref={imageRef}
        className="absolute bg-transparent -right-80"
      >
        <motion.img
          src={forexTrading}
          alt="Forex Trading"
          initial={{ x: "40%" }}
          animate={isInView ? { x: "0%" } : {}} // Animate only when in view
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="scale-150"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-white mx-auto md:min-h-svh lg:min-h-svh"></div>
    </div>
  );
}

export default TradeSmarterSection;
