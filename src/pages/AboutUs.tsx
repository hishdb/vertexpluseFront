import MenuBar from "../components/MenuBar";
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import shapeImage1 from "../assets/shapeObject1.png";
import shapeImage2 from "../assets/shapeObject2.png";
import backgroundImage from "../assets/team.jpg"
import logo from "../assets/vertexpluseWhite.png"

function AboutUs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const controls = useAnimation();
  const cards = [
    {
      icon: "/path-to-plus-icon.svg",
      title: "Who We Are",
      description: "The Plus500 trading platform is offered by Plus500UK Ltd, a UK based company with its main offices located in the city of London. The company is authorised and regulated by the Financial Conduct Authority (FCA) to offer Contracts For Difference (CFD). The company is a rapidly growing CFD provider in Europe and Asia and currently offers its portfolio of over 1000 instruments to over a million clients.",
      backgroundColor: "#f8f9ff"
    },
    {
      icon: "/path-to-lock-icon.svg",
      title: "Client Money",
      description: "When you open an account, Plus500UK Ltd will hold your funds on a segregated basis, in accordance with the Financial Conduct Authority's client money rules.",
      buttonText: "Client Money Protection",
      backgroundColor: "#f0f7ff"
    },
    {
      icon: "/path-to-star-icon.svg",
      title: "Highly Rated Trading Provider",
      description: "Your custom description here",
      backgroundColor: "#f5f9ff"
    },
  ];
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




  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow">
      <div
      className="relative bg-contain bg-right text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "82vh",
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-transparent"></div>

      {/* Animated decorative elements */}
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
        <motion.div
          style={{ y: springY1 }}
          className="absolute left-0 top-4 w-48 h-48 opacity-60"
        >
          <img src={shapeImage2} alt="Shape Image 4" className="rotate-[40deg]" />
        </motion.div>

        <motion.div
          style={{ y: springY2 }}
          className="absolute -left-60 top-1/2 w-106 h-106 opacity-70"
        >
          <img src={shapeImage1} alt="Shape Image 1" />
        </motion.div>

        <motion.div
          style={{ y: springY3 }}
          className="absolute left-8 bottom-1/2 w-16 h-16 opacity-30"
        >
          <img src={shapeImage2} alt="Shape Image 4" className="rotate-[240deg]" />
        </motion.div>
      </div>

      {/* Content Wrapper */}
       <div className="relative  flex flex-col md:flex-row h-full items-start justify-start px-6 md:px-10 max-w-6xl">
        <div className="w-full h-full flex items-center pl-60">
          <div className="flex flex-col items-start space-y-6 ">
         
          <img src={logo} alt="Shape Image 4" className="w-76 h-20" />
          

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-sky-400 leading-snug tracking-wide"
          >
           {t("About VertexPluse™")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-start text-md sm:text-md md:text-lg lg:text-lg font-normal text-white max-w-4xl mx-auto leading-relaxed"
          >
            {t("Plus500 is a global multi-asset fintech group operating proprietary technology-based trading platforms. Plus500 offers customers a range of trading products, including Contracts for Difference (“CFDs”), share dealing, and futures trading. Plus500 has a premium listing on the Main Market of the London Stock Exchange (symbol: PLUS) and is a constituent of the FTSE 250 index.")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-8"
          >
            <motion.button
              animate={controls}
              className="relative overflow-hidden bg-blue-500 text-white font-semibold px-28 py-3 md:py-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("StartTradingNow")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              className="relative overflow-hidden bg-transparent text-white border-2 border-white font-semibold px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-500 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("TryFreeDemo")}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          </div>
        </div>
      </div>
    </div>
    <div className="relative bg-white py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={shapeImage1}
          alt="Shape"
          className="absolute left-10 top-10 w-40 opacity-10"
        />
        <img
          src={shapeImage2}
          alt="Shape"
          className="absolute right-10 bottom-20 w-40 opacity-10"
        />
      </div>
        {/* overlapped cards*/}
      <div className="relative w-full px-6 sm:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto relative">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute w-full"
            style={{
              top: `${index * 300}px`,
            }}
          >
            <div
              className={`relative shadow-xl rounded-xl p-8 text-center border border-gray-100 
                ${index % 2 === 0 ? 'ml-0 mr-auto -rotate-2' : 'ml-auto mr-0 rotate-2'}
                transform hover:rotate-0 hover:-translate-y-2 transition-all duration-300 ease-in-out`}
              style={{
                maxWidth: '800px',
                width: '100%',
                backgroundColor: card.backgroundColor,
                zIndex: 10 - index,
                marginTop: '2rem',
              }}
            >
              {/* Card Content */}
              <div className="relative backdrop-blur-sm">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16">
                    <img 
                      src="/api/placeholder/64/64"
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                  {card.description}
                </p>

                {/* Button */}
                {card.buttonText && (
                  <button className="mt-6 px-6 py-2.5 bg-blue-100 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors duration-200">
                    {card.buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Spacer div to maintain container height */}
      <div style={{ height: `${(cards.length - 1) * 300 + 300}px` }} />
    </div>
    </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
