import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TradingSlider.module.css"; // Import as `styles`
import { motion } from "framer-motion";

function TradeSlider() {
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
      background: "./src/assets/bitcoinBackground.png",
      beforeTitle: "Trade CFDs on Cryptos",
      title: "HASSLE-FREE",
      description:
        "Buy or Sell CFDs on Cryptos such as Bitcoin, Ethereum, Litecoin, and other cryptocurrencies without the need of having an exchange account or a special wallet.",
      buttonLabel: "Trade Shares",
    },
    {
      background: "./src/assets/bitcoinBackground.png",
      beforeTitle: "Trade CFDs on",
      title: "Popular Shares",
      description:
        "Buy or Sell CFDs on Shares such as Apple, Amazon, Tesla, and other world-leading Stocks with our innovative trading platform.",
      buttonLabel: "Trade Commodities",
    },
    {
      background: "./src/assets/bitcoinBackground.png",
      beforeTitle: "Trade CFDs on a variety of",
      title: "Commodities",
      description:
        "Buy or Sell CFDs on Commodities such as Oil, Gold, Silver, and other commodities using our advanced technology.",
      buttonLabel: "Trade Crypto",
    },
    {
      background: "./src/assets/bitcoinBackground.png",
      beforeTitle: "Trade CFDs on your favourite",
      title: "Forex Pairs",
      description:
        "Buy or Sell CFDs on Forex pairs such as EUR/USD, GBP/USD, EUR/GBP, and more using our economic calendar to keep up to date on global events.",
      buttonLabel: "Trade ETFs",
    },
    {
      background: "./src/assets/bitcoinBackground.png",
      beforeTitle: "Trade CFDs on Indices from",
      title: "Around the Globe",
      description:
        "Buy or Sell CFDs on Indices such as S&P 500 (ES), NASDAQ 100 (NQ), FTSE 100 (UK100), and other popular indices using our free real-time quotes.",
      buttonLabel: "Trade ETFs",
    },
  ];

  return (
    <div className="relative bg-transparent py-12 lg:py-20 mt-40">
      <div className="max-w-full mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cursor-grabbing bg-none md:bg-[url('./src/assets/bitcoinBackground.png')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-between shadow-lg rounded-xl p-6 md:p-12 lg:p-16 gap-6 max-w-[90%] mx-auto transition-all duration-500`}
            >
             {/* Left Section: Content */}
             <div className="text-center md:text-left md:w-1/2 space-y-4 md:space-y-6">
                <h4 className="text-sm md:text-lg font-medium text-blue-700 leading-tight">
                  {slide.beforeTitle}
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
                  <span className="relative z-10">{slide.buttonLabel}</span>
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
