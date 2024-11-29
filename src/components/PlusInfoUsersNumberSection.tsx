import { useEffect, useState } from "react";

const PlusInfoUsersNumberSection = () => {
    const words = ["26+ Million", "2800*"]; 
    const words2 = ["Registered Customers", "instruments*"]; 
    const words3 = ["300+ Million", "50+"];
    const words4 = ["Positions Opened", "Countries"]; 
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
        <div className="relative bg-transparent py-40 px-6 md:px-16 overflow-hidden mt-50">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0 ">
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
          <div className="relative z-10 flex flex-col items-center space-y-8 ">
            {/* Top Section */}
            <h3 className="text-blue-900 text-center text-lg md:text-3xl font-medium max-w-2xl">
              Join over{" "}
              <span className="text-blue-500 font-medium">26 million </span> 
              <span className="font-normal">worldwide who have already chosen the Plus500 Group</span>
            </h3>
    
            {/* Stats Section */}
            <div className="relative bg-white shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 w-full max-w-7xl px-40 py-24">
            {/* Left Stat */}
            <div className="text-center md:text-left">
            <h2 className={`text-blue-900 font-semibold text-3xl md:text-5xl transition-opacity transition-transform duration-1000 transform ${
                isVisible
                ? "opacity-100 translate-x-5"
                : "opacity-10 -translate-x-0"
            }`}>
                {words[currentWordIndex]}
            </h2>
            <p className={`text-blue-400 text-3xl transition-opacity transition-transform duration-1000 transform ${
                isVisible
                ? "opacity-100 translate-x-5"
                : "opacity-10 -translate-x-0"
            }`}>
                {words2[currentWordIndex]}
            </p>
            </div>

            {/* Right Stat */}
            <div className="text-center md:text-right">
            <h2 className={`text-blue-900 font-semibold text-3xl md:text-5xl transition-opacity transition-transform duration-500 transform ${
                isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}>
                {words3[currentWordIndex]}
            </h2>
            <p className={`text-blue-400 text-3xl transition-opacity transition-transform duration-500 transform ${
                isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}>
                {words4[currentWordIndex]}
            </p>
            </div>

            {/* Floating Label */}
            <div className="absolute -top-6 right-8 md:-right-10 bg-blue-800 text-white px-6 py-3 text-md font-semibold rounded-full shadow-2xl">
            * Since inception
            </div>
            </div>
            <p className="text-gray-500 text-text-base md:text-lg">
            * Instrument availability is subject to jurisdiction.
                </p>
          </div>
         
        </div>
      );
};

export default PlusInfoUsersNumberSection;