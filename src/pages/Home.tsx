import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import backgroundglobal from "../assets/backgroundglobal.jpg";
import shapeImage1 from "../assets/shapeObject1.png";
import shapeImage2 from "../assets/shapeObject2.png";
import shapeImage3 from "../assets/shapeObject3.png";

const words = ["indices", "crypto", "commodities", "shares", "options", "ETFs"];

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  // Scroll animations setup
  const { scrollY } = useScroll();
  
  // Transform values for floating elements
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -120]);
  const y3 = useTransform(scrollY, [0, 300], [0, -80]);
  
  // Spring configurations for smoother animations
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const springY1 = useSpring(y1, springConfig);
  const springY2 = useSpring(y2, springConfig);
  const springY3 = useSpring(y3, springConfig);

  // Button animation
  useEffect(() => {
    const startButtonAnimation = async () => {
      while (true) {
        await controls.start({
          scale: 1,
          boxShadow: "0 0 20px 0 rgba(59, 130, 246, 0.3)",
          transition: { duration: 1 }
        });
        await controls.start({
          scale: 0.95,
          boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
          transition: { duration: 1 }
        });
      }
    };
    startButtonAnimation();
  }, [controls]);

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
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow">
        <div
          className="relative bg-cover bg-center text-white overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundglobal})`,
            height: "82vh",
          }}
        >
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500/50"></div>

          {/* Animated decorative elements */}
          <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
            <motion.div
              style={{ y: springY1 }}
              className="absolute left-24 top-1/4 w-32 h-32 opacity-60"
            >
              <img src={shapeImage2} alt="Shape Image 4" className="rotate-[40deg]"/>
            </motion.div>

            <motion.div
              style={{ y: springY2 }}
              className="absolute -left-60 top-1/2 w-106 h-106 opacity-70"
            >
              <img src={shapeImage1} alt="Shape Image 1" />
            </motion.div>

            <motion.div
              style={{ y: springY3 }}
              className="absolute left-8 bottom-1/3 w-16 h-16 opacity-30"
            >
                <img src={shapeImage2} alt="Shape Image 4" className="rotate-[240deg]"/>
            </motion.div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center md:justify-between px-6 md:px-16">
            {/* Left Section: Text and Buttons */}
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold leading-tight md:leading-snug tracking-normal"
                >
                  IT'S TRADING <br />
                  <span className="text-blue-300">WITH A PLUS</span>
                </motion.h1>

                {/* Rotating Words */}
                <div className="flex justify-center items-center w-full">
                  <p
                    className={`text-2xl md:text-3xl font-medium text-center transition-opacity duration-500 transform ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {words[currentWordIndex]}
                  </p>
                </div>

                {/* Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
                >
                  <motion.button
                    animate={controls}
                    className="relative overflow-hidden bg-blue-500 text-white font-semibold px-8 md:px-14 py-3 md:py-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Start Trading Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>

                  <motion.button 
                    className="relative overflow-hidden bg-transparent text-white border-2 border-white font-semibold px-8 md:px-14 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-500 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Try Free Demo</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Right Section: Image with Animated Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden md:flex w-4/5 h-full justify-center items-center relative"
            >

              <img
                src="https://www.forex.com/en-us/-/media/project/gain-capital/forex/heroes/platforms/overview/fx-us-platform-overview-mobile.png?h=1000&iar=0&w=1440&hash=191914194E4FCDA9FD9CD987A6AC6C1C"
                alt="Trading Devices"
                className="max-w-full h-auto scale-110 relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;