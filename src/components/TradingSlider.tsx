import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TradingSlider.module.css"; // Import as `styles`
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function TradeSlider() {

  const {t} = useTranslation();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "10%",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    dotsClass: `slick-dots ${styles.customDots}`, // Use styles here
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  const slides = [
    {
      SlideTitle: t("SlideTitle1"),
      title: t("Title1"),
      description: t("Description1"),
      SlideButtonLabel: t("SlideButtonLabel1"),
    },
    {
      SlideTitle: t("SlideTitle2"),
      title: t("Title2"),
      description: t("Description2"),
      SlideButtonLabel: t("SlideButtonLabel2"),
    },
    {
      SlideTitle: t("SlideTitle3"),
      title: t("Title3"),
      description: t("Description3"),
      SlideButtonLabel: t("SlideButtonLabel3"),
    },
    {
      SlideTitle: t("SlideTitle4"),
      title: t("Title4"),
      description: t("Description4"),
      SlideButtonLabel: t("SlideButtonLabel4"),
    },
    {
      SlideTitle: t("SlideTitle5"),
      title: t("Title5"),
      description: t("Description5"),
      SlideButtonLabel: t("SlideButtonLabel5"),
    },
  ];
  

  return (
    <div className="relative bg-transparent  px-50 mt-40">
      <div className="max-w-full mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cursor-grabbing shadow-lg rounded-xl p-6 transition-all duration-500`}
            >
             {/* Left Section: Content */}
             <div className="text-center space-y-6">
                <h4 className="text-sm md:text-lg font-medium text-blue-700 leading-tight">
                  {slide.SlideTitle}
                </h4>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-500 leading-snug">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                  {slide.description}
                </p>
                <motion.button
                  className="relative overflow-hidden bg-blue-500 text-white font-semibold px-6 py-3 md:px-20 lg:px-28 md:py-4 rounded-lg transition-colors duration-300 hover:bg-blue-600 w-full md:w-auto shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{slide.SlideButtonLabel}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TradeSlider;
