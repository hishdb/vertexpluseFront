import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import shapeImage2Black from "../assets/itemListIcon.png";
import shapeImage1Black from "../assets/itemListIcon.png";
import MarketInsights from "./MarketInsights";

interface GlobalMarketsSectionProps {
  text1: string;
  text2: string;
  text3:string
}

const GlobalMarketsSectionWith3TextParameter = ({ text1, text2, text3 }: GlobalMarketsSectionProps) => {


  const sectionRef = useRef<HTMLDivElement>(null);
  const marketListRef = useRef<HTMLDivElement>(null);

  // Scroll animation configuration
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, mass: 0.8 };

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const fasterY = useTransform(scrollYProgress, [0, 0.3], [200, 0]);
  const springFasterY = useSpring(fasterY, { stiffness: 150, damping: 20, mass: 0.5 });

  const springScale = useSpring(scale, springConfig);
  const springY = useSpring(y, springConfig);


  return (
    <div ref={sectionRef} className="relative bg-transparent min-h-screen w-full overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 ">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="rotate(-2, 500, 300)">
            <rect
              x="160"
              y="20"
              width="850"
              height="450"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
              transform="translate(8, 8)"
            />
            <rect
              x="180"
              y="40"
              width="850"
              height="450"
              rx="16"
              ry="16"
              className="fill-blue-900"
            />
          </g>
        </svg>
      </div>


      <div className="absolute left-0 top-44 h-full w-full pointer-events-none">
        <motion.div style={{ y: springY }} className="absolute left-10 bottom-1/4 w-40 h-40 opacity-40 rotate-[20deg]">
          <img src={shapeImage1Black} alt="Shape Image 1" />
        </motion.div>

        <motion.div style={{ y: springFasterY }} className="absolute right-20 bottom-1/4 w-20 h-20 opacity-20">
          <img src={shapeImage2Black} alt="Shape Image 2" className="rotate-[10deg]" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-0 pt-28 pb-28 sm:px-8 lg:px-12">
        
        <div className="text-white w-full md:w-1/2 space-y-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl leading-snug lg:leading-normal">{text1}</h2>
          <p className="text-xl sm:text-2xl lg:text-5xl font-bold text-sky-400 leading-relaxed opacity-90">{text2}</p>
          <p className="text-sm sm:text-sm md:text-lg lg:text-lg font-normal leading-relaxed opacity-90">{text3}</p>
        </div>

        <motion.div
        className="mt-20 sm:mt-0 w-full sm:w-0"
          ref={marketListRef}
          style={{
            scale: springScale,
            y: springY,
          }}>
   
        <MarketInsights />
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalMarketsSectionWith3TextParameter;
