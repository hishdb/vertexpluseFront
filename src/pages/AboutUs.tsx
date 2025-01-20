import MenuBar from "../components/MenuBar";
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import shapeImage1 from "../assets/itemListIconWhiteEmpty.webp";
import shapeImage2 from "../assets/itemListIconWhite.webp";
import backgroundImage from "../assets/team.webp"
import logo from "../assets/vertexpluseWhite.webp"
import aboutUsIcon1 from "../assets/about-us-who-we-are-icon1.svg"
import aboutUsIcon2 from "../assets/about-us-who-we-are-icon2.svg"
import aboutUsIcon3 from "../assets/about-us-who-we-are-icon3.svg"
import aboutUsIcon4 from "../assets/about-us-who-we-are-icon4.svg"
import teamImage from "../assets/team2.webp";
import WeSponsor from "../components/WeSponsor";

function AboutUs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const controls = useAnimation();
  const cards = [
    {
      icon: aboutUsIcon1,
      title: t("WhoWeAre"),
      description: t("TheVertexPlusetradingPlatformOfferedVertexPluseLtd"),
      backgroundColor: "#000B58",
      titleColor: "#F8D251", 
      descriptionColor: "#F3F3E0", 
    },
    {
      icon: aboutUsIcon2,
      title: t("ClientMoney"),
      description: t("WhenAccountVertexPlusewillHoldYourFundsSegregatedBasis"),
      buttonText: t("ClientMoneyProtection"),
      backgroundColor: "#003161",
      titleColor: "#F8D251", 
      descriptionColor: "#FFFFFF", 
    },
    {
      icon: aboutUsIcon3,
      title: t("HighlyRatedTradingProvider"),
      description: t("VertexPluseIsOneOfTheHighestRatedTradingAppsAppleAppStoreGooglePlay"),
      backgroundColor: "#608BC1",
      titleColor: "#0B0C0E",
      descriptionColor:""
    },
    {
      icon: aboutUsIcon4,
      title: t("VertexPluseReviewsRealStoriesRealTraders"),
      description: t("WithMillionCustomersWorldwide"),
      backgroundColor: "#CBDCEB",
      titleColor: "#0B0C0E",
      descriptionColor:""
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
      <main className="flex-grow" >
      <div
      className="relative bg-cover sm:bg-contain bg-top sm:bg-right text-white overflow-hidden"
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
          className="absolute left-0 top-4 w-48 h-48 opacity-50"
        >
          <img src={shapeImage2} alt="Shape Image 4" className="rotate-[80deg]" />
        </motion.div>

        <motion.div
          style={{ y: springY2 }}
          className="absolute -left-40 top-[60%] w-90 h-90 opacity-60"
        >
          <img src={shapeImage1} alt="Shape Image 1" className="rotate-[20deg]" />
        </motion.div>

        <motion.div
          style={{ y: springY3 }}
          className="absolute left-24 bottom-1/2 w-16 h-16 opacity-20"
        >
          <img src={shapeImage2} alt="Shape Image 4" />
        </motion.div>
      </div>

      {/* Content Wrapper */}
       <div className="relative  flex flex-col md:flex-row h-full items-start justify-start px-6 md:px-10 max-w-6xl" dir= {isRTL ? "rtl" : "ltr"}>
        <div className="w-full h-full flex items-center sm:pl-60">
          <div className="flex flex-col items-start space-y-6 ">
         
          <img src={logo} alt="Shape Image 4" className="w-1/4 h-1/4" />
          

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-sky-400 leading-snug tracking-wide"
          >
           {t("AboutVertexPluse™")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-start text-md sm:text-md md:text-lg lg:text-lg font-normal text-white max-w-4xl mx-auto leading-relaxed"
          >
            {t("VertexPluseGlobalMultiAsset")}
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
              onClick={() => window.location.href = "https://platform.vertexpluse.com/login"}
            >
              <span className="relative z-10">{t("StartTradingNow")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              className="relative overflow-hidden bg-transparent text-white border-2 border-white font-semibold px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-500 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "https://platform.vertexpluse.com/register"}
            >
              <span className="relative z-10">{t("TryFreeDemo")}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          </div>
        </div>
      </div>
      </div>


      {/* overlapped cards*/}
      <div className="relative py-20 overflow-hidden pb-60  hidden lg:block" dir= {isRTL ? "rtl" : "ltr"}>
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


        
          
        <div className="relative w-full  px-6 sm:px-12 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto relative ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute w-full"
              style={{
                top: `${index * 300}px`,
              }}
            >
              <div
                className={`relative shadow-xl rounded-xl p-8 text-center border border-amber-300 
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
                    <div className="w-28 h-28">
                      <img 
                        src= {card.icon}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4" style={{color: card.titleColor}}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{color: card.descriptionColor}}>
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

      <div className="max-w-7xl mx-auto px-4 py-16 block pb-60 lg:hidden md:hidden">
        <div className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div 
                className="rounded-2xl p-8 shadow-lg border border-blue-400/20"
                style={{ backgroundColor: card.backgroundColor }}
              >
                {card.icon && (
                  <div className="flex justify-center mb-6">
                    <img 
                      src={card.icon} 
                      alt="" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}
                
                <h3 
                  className="text-2xl font-semibold mb-4 text-center"
                  style={{ color: card.titleColor }}
                >
                  {card.title}
                </h3>
                
                {card.description && (
                  <p 
                    className="text-center max-w-2xl mx-auto leading-relaxed"
                    style={{ color: card.descriptionColor }}
                  >
                    {card.description}
                  </p>
                )}
                
                {card.buttonText && (
                  <div className="text-center mt-6">
                    <button className="px-6 py-2.5 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors font-medium">
                      {card.buttonText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>    

      <div className="relative w-full bg-blue-800 pb-16">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={shapeImage1}
            alt="Shape"
            className="absolute left-10 top-10 w-40 opacity-40"
          />
          <img
            src={shapeImage2}
            alt="Shape"
            className="absolute right-10 bottom-20 w-40 opacity-40"
          />
          <img
            src={shapeImage1}
            alt="Shape"
            className="absolute right-45 bottom-80 w-40 opacity-30 rotate-[20deg]"
          />
        </div>


        {/* Image Container */}
        <div className="relative h-[600px] w-full">
          <img 
            src={teamImage}
            alt="Team collaboration" 
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 sm:w-[70%] h-[100%] object-cover rounded-xl"
          />
          
        </div>
          {/* Content */}
          <div className="relative top-[60%] w-full text-center text-white px-4" dir= {isRTL ? "rtl" : "ltr"}>
            <h1 className="text-4xl font-bold mb-16">{t("OBJECTIVESVISION")}</h1>
            
            <div className="max-w-3xl mx-auto space-y-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{t("OurVision")}</h2>
                <p className="text-lg">
                  {t("WeContinuallyStrengtheningPosition")}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">{t("OurPurpose")}</h2>
                <p className="text-lg">
                  {t("VertexPluseOperatesAcrossProductsDevicesCountriesToProvideOurClients")}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">{t("OurValues")}</h2>
                <p className="text-lg">
                  {t("WeConsistentlyStriveForExcellenceWhenItComes")}
                  </p>
              </div>
            </div>
          </div>
      

      
      
      </div>



      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16" dir= {isRTL ? "rtl" : "ltr"}>
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Office Address */}
          <div>
            <h2 className="text-blue-700 text-2xl font-semibold mb-6">{t("OfficeAddress")}</h2>
          </div>

          {/* Complaints Process */}
          <div>
            <h2 className="text-blue-700 text-2xl font-semibold mb-6">{t("ComplaintsProcess")}</h2>
            <p className="text-gray-600 mb-4">
              {t("FullDetailsAreAvailableRequest")}
            </p>
            <div className="space-y-1 text-gray-600">
              <p>The UK Financial Ombudsman</p>
              <p>South Quay Plaza</p>
              <p>183, Marsh Wall</p>
              <p>London E14 9SR</p>
            </div>
          </div>
        </div>

        {/* Communication Section */}
        <div className="max-w-2xl">
          <h2 className="text-blue-700 text-2xl font-semibold mb-6">
            {t("CommunicationWithCustomers")}
          </h2>
          <p className="text-gray-600">
            {t("AllCommunicationWithCustomersIsDone")}
          </p>
        </div>
      </div>



      <div className="bg-blue-800 text-white py-16 relative overflow-hidden" dir= {isRTL ? "rtl" : "ltr"}>
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={shapeImage1}
            alt="Shape"
            className="absolute left-10 top-10 w-40 opacity-50"
          />
          <img
            src={shapeImage2}
            alt="Shape"
            className="absolute right-10 bottom-20 w-40 opacity-50"
          />
          
        </div>

        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">
              {t("OnlyEmailsReceivedFromTheVertexPluse.comDomain")}
            </h2>
            <p>
              {t("AnyOtherEmailsClaimingFromVertexPluseAreDeemedFraudulent")}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">
              {t("vertexPluseWillNeverContact")}
            </h2>
            <p>
              {t("vertexPluseDoesNotOfferInvestment")}
            </p>
          </div>
        </div>
        
      </div>



      <WeSponsor/>
      <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 p-6 sm:p-0 md:p-10 lg:p-10 mt-8 pb-20"
            >
              <motion.button
                animate={controls}
                className="relative overflow-hidden bg-blue-500 text-white font-semibold px-28 py-3 md:py-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "https://platform.vertexpluse.com/login"}
              >
                <span className="relative z-10">{t("StartTradingNow")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                className="relative overflow-hidden bg-transparent text-blue-500 border-2 border-blue-500 font-semibold px-28 py-3 md:py-4 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "https://platform.vertexpluse.com/register"}
              >
                <span className="relative z-10">{t("TryFreeDemo")}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.button>
      </motion.div>



      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
