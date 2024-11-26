import { motion } from 'framer-motion';
import instrumentScreen2 from "../assets/instrument-screen2-en.png";
function InsightsIntroductionSection ()  {

  return (
    <div className="relative bg-white min-h-screen w-full py-12 px-6 md:px-16 overflow-hidden ">
 
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <svg 
          viewBox="0 0 1200 600" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="rotate(300, 300)">
            <rect
              x="180"
              y="70"
              width="850"
              height="400"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
              transform="translate(8, 8)"
            />
            <rect
              x="200"
              y="90"
              width="850"
              height="400"
              rx="16"
              ry="16"
              className="fill-blue-900"
            />
          </g>
        </svg>
      </div>
   
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto h-full  ">
      {/* Left Content */}
      <div className="text-white w-full md:w-1/2 space-y-6 p-8 mt-32 md:mt-0">
        <h2 className="text-3xl leading-tight">
          A world of opportunities with <br />
          <span className="text-blue-400 text-5xl font-bold">GLOBAL MARKETS</span>
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
          Discover thousands of CFDs on the world's most popular financial
          instruments and get free real-time quotes to explore endless trading
          opportunities.
        </p>
      </div>

      <div className="flex justify-center mb-8">
    {/* Right Content: two images - Centered and Responsive */}
    <motion.div
          className=""
        >
         <img src={instrumentScreen2}  />
        </motion.div>
        
       
          <motion.div
          className=""
        >
         <img src={instrumentScreen2}  />
        </motion.div>
    </div>
      
      </div>
    </div>
  );
};
    
export default InsightsIntroductionSection;
