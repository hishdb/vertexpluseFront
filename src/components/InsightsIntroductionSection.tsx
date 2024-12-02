import { motion } from 'framer-motion';
import instrumentScreen2 from "../assets/instrument-screen2-en.png";
import instrumentScreen1 from "../assets/instrument-screen1-en.png";
import itemListIconWhite from "../assets/itemListIconWhite.png";
import InsightsIcon from '@mui/icons-material/Insights';

function InsightsIntroductionSection ()  {
  const features = [
    "Uncover a universe of exclusive trading data in the palm of your hand.",
    "Harness the wisdom of the crowd to empower your trading strategy.",
    "Analyse trends and see what other Plus500 traders are doing."
  ];
  return (
    <div className="relative bg-trasnparent min-h-screen w-full overflow-hidden mt-60">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <svg 
          viewBox="0 0 1200 600" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="rotate(1, 300, 300)">
            <rect
              x="160"
              y="20"
              width="850"
              height="400"
              rx="16"
              ry="16"
              className="fill-blue-900/20"
              transform="translate(8, 8)"
            />
            <rect
              x="180"
              y="40"
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
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto h-full  ">
      {/* Left Content */}
      <div className="text-white w-full md:w-1/2 space-y-8 md:space-y-10 lg:space-y-14 px-4 md:px-6 lg:px-8 mt-32 md:mt-0">
      <span className="text-sky-500 text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center space-x-2">
        Introducing: <InsightsIcon style={{ fontSize: '2.5rem' }} />
        <span>+Insights</span>
      </span>
      <ul className="space-y-4 md:space-y-6 lg:space-y-8 pb-10 md:pb-14">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 md:space-x-6 lg:space-x-8"
          >
            <img
              src={itemListIconWhite}
              width="24px"
              height="24px"
              className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
              alt="Icon"
            />
            <p className="text-white font-normal text-md md:text-lg lg:text-xl">
              {feature}
            </p>
          </li>
        ))}
      </ul>
    </div>


      {/* Right Content: two images - Centered and Responsive */}
      <div className="flex mb-8 mt-10 relative">
        <motion.div
          className="relative -right-0 transform shadow-2xl rounded-full sm:-right-20 md:-right-40 lg:-right-48 w-2/3  sm:w-1/2 md:w-[60%] lg:w-[80%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <img src={instrumentScreen2} />
        </motion.div>
        <motion.div
          className="absolute w-full shadow-2xl rounded-full right-16 sm:-right-20 md:-right-44 lg:-right-72     w-2/3 sm:w-1/2 md:w-[60%] lg:w-[80%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0.3, rotate: ['0deg', '14deg'] }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <img src={instrumentScreen1} />
        </motion.div>
      </div>
      </div>
    </div>
  );
};
    
export default InsightsIntroductionSection;
