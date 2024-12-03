import { useEffect, useState } from "react";

const PlusInfoUsersNumberSection = () => {
  const words = ["26+ Million", "2800*"];
  const words2 = ["Registered Customers", "Instruments*"];
  const words3 = ["50+", "300+ Million"];
  const words4 = ["Countries", "Positions Opened"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-transparent py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1200 450"
          className="w-full h-full opacity-50"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="rotate(3, 300, 300)">
            <rect
              x="160"
              y="20"
              width="850"
              height="300"
              rx="16"
              ry="16"
              className="stroke-blue-500 stroke-[0.3] fill-transparent"
              transform="translate(8, 8)"
            />
            <rect
              x="180"
              y="40"
              width="850"
              height="300"
              rx="16"
              ry="16"
              className="stroke-blue-400 stroke-[0.9] fill-transparent"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Top Section */}
        <h3 className="text-blue-900 text-center text-lg md:text-xl lg:text-2xl font-medium max-w-2xl">
          Join over{" "}
          <span className="text-blue-500 font-medium">26 million </span>
          <span className="font-normal">
            worldwide who have already chosen the Plus500 Group
          </span>
        </h3>

        {/* Stats Section */}
        <div className="relative bg-white shadow-lg rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 w-full max-w-5xl">
          {/* Left Stat */}
          <div className="text-center md:text-left flex-1">
            <h2
              className={`text-blue-900 font-semibold text-3xl md:text-4xl lg:text-5xl transition-opacity transition-transform duration-1000 transform ${
                isVisible ? "opacity-100 translate-x-5" : "opacity-10 -translate-x-0"
              }`}
            >
              {words[currentWordIndex]}
            </h2>
            <p
              className={`text-blue-400 text-lg md:text-xl lg:text-2xl transition-opacity transition-transform duration-1000 transform ${
                isVisible ? "opacity-100 translate-x-5" : "opacity-10 -translate-x-0"
              }`}
            >
              {words2[currentWordIndex]}
            </p>
          </div>

          {/* Right Stat */}
          <div className="text-center md:text-right flex-1">
            <h2
              className={`text-blue-900 font-semibold text-3xl md:text-4xl lg:text-5xl transition-opacity transition-transform duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {words3[currentWordIndex]}
            </h2>
            <p
              className={`text-blue-400 text-lg md:text-xl lg:text-2xl transition-opacity transition-transform duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {words4[currentWordIndex]}
            </p>
          </div>

          {/* Floating Label */}
          <div className="absolute -top-6 md:-top-8 right-8 md:right-12 bg-blue-800 text-white px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold rounded-full shadow-lg">
            * Since inception
          </div>
        </div>

        <p className="text-gray-500 text-sm md:text-base lg:text-lg">
          * Instrument availability is subject to jurisdiction.
        </p>
      </div>
    </div>
  );
};

export default PlusInfoUsersNumberSection;
