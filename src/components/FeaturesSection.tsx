import { motion } from "framer-motion";
import itemListIcon from "../assets/itemListIcon.png";

const FeaturesSection = () => {
  const features = [
    "Fast and reliable order execution",
    "No commissions and tight spreads",
    "Advanced analytical tools",
    "Leverage of up to 1:300",
    "Real-time quotes",
    "Fast and secure withdrawals",
  ];

  return (
    <section className="flex items-center justify-center bg-transparent pt-40">
      <div className=" px-6 md:px-16">
            <ul className="space-y-10 pb-20">
                {features.map((feature, index) => (
                <li
                key={index}
                className="flex items-center space-x-4" // Use flex and items-center for vertical alignment
                >
                <img
                    src={itemListIcon}
                    width="28px"
                    height="28px"
                    className="flex-shrink-0" // Prevent the image from shrinking
                />
                <p className="text-blue-800 font-normal text-md sm:text-2xl">
                    {index === 1 ? (
                    <>
                        <a
                        href="#"
                        className="text-blue-500 underline hover:no-underline font-normal text-md sm:text-2xl"
                        >
                        No commissions
                        </a>{" "}
                        and tight spreads
                    </>
                    ) : (
                    feature
                    )}
                </p>
                </li>
            ))}
        </ul>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
        >
        <motion.button
            className="relative overflow-hidden bg-blue-500 text-white font-semibold px-6 md:px-28 py-3 md:py-4 rounded-lg transition-colors duration-300 hover:bg-blue-600 w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10">Explore Markets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>

        <motion.button
            className="relative overflow-hidden bg-transparent text-blue-600 border-2 border-blue-600 font-semibold px-8 md:px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-500 group w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10">Market News</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
