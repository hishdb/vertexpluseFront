import { motion } from "framer-motion";

function VertexPluse3DecorativeBg() {
  const cards = [
    {
      title: "Plus500 INVEST",
      description: "Investing in your favourite stocks",
      note: "* Availability is subject to operator.",
      bgColor: "bg-blue-500",
    },
    {
      title: "Plus500 CFD",
      description: "Leveraged trading, going long or short",
      button: "Start Trading Now",
      bgColor: "bg-blue-700",
    },
    {
      title: "Plus500 FUTURES",
      description: "Trading the most popular U.S. Futures",
      note: "* Available only in the U.S.",
      bgColor: "bg-blue-800",
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
  };

  const backgroundAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-transparent mt-40 pb-40">
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

      {/* Card Section */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-12 px-8 py-16">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`relative w-full max-w-sm p-8 rounded-lg shadow-lg ${card.bgColor} text-white flex flex-col items-center space-y-6`}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
          >
            {/* Floating Background Animation */}
            <motion.div
              className="absolute inset-0 z-0 bg-gradient-to-r from-blue-300 to-blue-500 opacity-20 rounded-lg blur-2xl"
              variants={backgroundAnimation}
            ></motion.div>

            {/* Card Title */}
            <motion.h3
              className="text-4xl font-bold text-center relative z-10"
              whileHover={{ letterSpacing: "2px" }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h3>

            {/* Card Description */}
            <p className="text-center text-xl relative z-10">{card.description}</p>

            {/* Optional Note */}
            {card.note && (
              <p className="text-center text-xs opacity-70 relative z-10">
                {card.note}
              </p>
            )}

            {/* Optional Button */}
            {card.button && (
              <motion.button
                className="px-6 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {card.button}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default VertexPluse3DecorativeBg;
