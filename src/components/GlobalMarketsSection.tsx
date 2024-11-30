import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring,  } from "framer-motion";
import shapeImage2Black from "../assets/shapeObject2-black.png";
import shapeImage1Black from "../assets/shapeObject1-black.png";

// Define the market item type
type MarketItem = {
  name: string;
  price: string;
  change: string;
  positive: boolean;
  icon: string;
  color: string;
};

// Define valid tab IDs
type TabID = 'crypto' | 'popular' | 'chart' | 'window' | 'bar' | 'dollar' | 'clock' | 'box' | 'transfer';

// Define the tab type
type Tab = {
  id: TabID;
  icon: string;
  label: string;

};

// Define the market data type
type MarketData = {
  [K in TabID]: MarketItem[];
};

  const tabs: Tab[] = [
    { id: 'crypto', icon: "₿", label: "Crypto" },
    { id: 'popular', icon: "🔥", label: "Popular" },
    { id: 'chart', icon: "📈", label: "Chart" },
    { id: 'window', icon: "🪟", label: "Window" },
    { id: 'bar', icon: "📊", label: "Bar" },
    { id: 'dollar', icon: "$", label: "Dollar" },
    { id: 'clock', icon: "⏰", label: "Clock" },
    { id: 'box', icon: "📦", label: "Box" },
    { id: 'transfer', icon: "⇅", label: "Transfer" },
  ] as const;

  const marketData: MarketData = {
    crypto: [
      { name: "Bitcoin", price: "98027.03", change: "0.16%", positive: true, icon: "₿", color: "bg-orange-500" },
      { name: "Ethereum", price: "3480.14", change: "3.56%", positive: true, icon: "Ξ", color: "bg-purple-500" },
      { name: "Ethereum / Bitcoin", price: "0.03525", change: "3.44%", positive: true, icon: "E/B", color: "bg-orange-400" },
      { name: "Crypto 10 Index", price: "24430.65", change: "1.25%", positive: true, icon: "10", color: "bg-green-500" },
      { name: "BNB", price: "658.08", change: "0.66%", positive: true, icon: "BNB", color: "bg-yellow-500" },
      { name: "Cardano", price: "1.05238", change: "3.55%", positive: true, icon: "⋈", color: "bg-blue-500" },
      { name: "Solana", price: "249.57", change: "-0.46%", positive: false, icon: "S", color: "bg-purple-600" },
      { name: "Avalanche", price: "45.19", change: "8.45%", positive: true, icon: "A", color: "bg-red-500" },
    ],
    popular: [
      { name: "Apple Inc.", price: "182.52", change: "1.25%", positive: true, icon: "🍎", color: "bg-gray-800" },
      { name: "Tesla", price: "202.64", change: "-2.31%", positive: false, icon: "T", color: "bg-red-600" },
      { name: "Microsoft", price: "420.55", change: "0.86%", positive: true, icon: "M", color: "bg-blue-600" },
      { name: "Amazon", price: "178.35", change: "1.52%", positive: true, icon: "A", color: "bg-orange-600" },
      { name: "Meta", price: "502.30", change: "3.15%", positive: true, icon: "M", color: "bg-blue-500" },
      { name: "Nvidia", price: "890.25", change: "2.45%", positive: true, icon: "N", color: "bg-green-600" },
      { name: "Google", price: "147.68", change: "0.78%", positive: true, icon: "G", color: "bg-blue-400" },
      { name: "Netflix", price: "628.92", change: "-1.23%", positive: false, icon: "N", color: "bg-red-500" },
    ],
    chart: [
      { name: "S&P 500", price: "5,234.18", change: "0.85%", positive: true, icon: "S", color: "bg-blue-800" },
      { name: "Dow Jones", price: "38,749.12", change: "0.56%", positive: true, icon: "D", color: "bg-blue-700" },
      { name: "NASDAQ", price: "16,382.75", change: "1.12%", positive: true, icon: "N", color: "bg-purple-700" },
      { name: "FTSE 100", price: "7,682.45", change: "-0.32%", positive: false, icon: "F", color: "bg-indigo-600" },
      { name: "DAX", price: "17,842.35", change: "0.44%", positive: true, icon: "D", color: "bg-gray-700" },
      { name: "Nikkei 225", price: "39,910.82", change: "1.75%", positive: true, icon: "N", color: "bg-red-700" },
      { name: "Shanghai", price: "3,048.98", change: "-0.91%", positive: false, icon: "S", color: "bg-red-600" },
      { name: "HSI", price: "16,589.45", change: "0.23%", positive: true, icon: "H", color: "bg-red-800" },
    ],
    window: [
      { name: "S&P 500", price: "5,234.18", change: "0.85%", positive: true, icon: "S", color: "bg-blue-800" },
      { name: "Dow Jones", price: "38,749.12", change: "0.56%", positive: true, icon: "D", color: "bg-blue-700" },
      { name: "NASDAQ", price: "16,382.75", change: "1.12%", positive: true, icon: "N", color: "bg-purple-700" },
      { name: "FTSE 100", price: "7,682.45", change: "-0.32%", positive: false, icon: "F", color: "bg-indigo-600" },
      { name: "DAX", price: "17,842.35", change: "0.44%", positive: true, icon: "D", color: "bg-gray-700" },
      { name: "Nikkei 225", price: "39,910.82", change: "1.75%", positive: true, icon: "N", color: "bg-red-700" },
      { name: "Shanghai", price: "3,048.98", change: "-0.91%", positive: false, icon: "S", color: "bg-red-600" },
      { name: "HSI", price: "16,589.45", change: "0.23%", positive: true, icon: "H", color: "bg-red-800" },
    ],
    bar: [
      { name: "S&P 500", price: "5,234.18", change: "0.85%", positive: true, icon: "S", color: "bg-blue-800" },
      { name: "Dow Jones", price: "38,749.12", change: "0.56%", positive: true, icon: "D", color: "bg-blue-700" },
      { name: "NASDAQ", price: "16,382.75", change: "1.12%", positive: true, icon: "N", color: "bg-purple-700" },
      { name: "FTSE 100", price: "7,682.45", change: "-0.32%", positive: false, icon: "F", color: "bg-indigo-600" },
      { name: "DAX", price: "17,842.35", change: "0.44%", positive: true, icon: "D", color: "bg-gray-700" },
      { name: "Nikkei 225", price: "39,910.82", change: "1.75%", positive: true, icon: "N", color: "bg-red-700" },
      { name: "Shanghai", price: "3,048.98", change: "-0.91%", positive: false, icon: "S", color: "bg-red-600" },
      { name: "HSI", price: "16,589.45", change: "0.23%", positive: true, icon: "H", color: "bg-red-800" },
    ],    
    dollar: [
      { name: "S&P 500", price: "5,234.18", change: "0.85%", positive: true, icon: "S", color: "bg-blue-800" },
      { name: "Dow Jones", price: "38,749.12", change: "0.56%", positive: true, icon: "D", color: "bg-blue-700" },
      { name: "NASDAQ", price: "16,382.75", change: "1.12%", positive: true, icon: "N", color: "bg-purple-700" },
      { name: "FTSE 100", price: "7,682.45", change: "-0.32%", positive: false, icon: "F", color: "bg-indigo-600" },
      { name: "DAX", price: "17,842.35", change: "0.44%", positive: true, icon: "D", color: "bg-gray-700" },
      { name: "Nikkei 225", price: "39,910.82", change: "1.75%", positive: true, icon: "N", color: "bg-red-700" },
      { name: "Shanghai", price: "3,048.98", change: "-0.91%", positive: false, icon: "S", color: "bg-red-600" },
      { name: "HSI", price: "16,589.45", change: "0.23%", positive: true, icon: "H", color: "bg-red-800" },
    ],
    clock: [
      { name: "S&P 500", price: "5,234.18", change: "0.85%", positive: true, icon: "S", color: "bg-blue-800" },
      { name: "Dow Jones", price: "38,749.12", change: "0.56%", positive: true, icon: "D", color: "bg-blue-700" },
      { name: "NASDAQ", price: "16,382.75", change: "1.12%", positive: true, icon: "N", color: "bg-purple-700" },
      { name: "FTSE 100", price: "7,682.45", change: "-0.32%", positive: false, icon: "F", color: "bg-indigo-600" },
      { name: "DAX", price: "17,842.35", change: "0.44%", positive: true, icon: "D", color: "bg-gray-700" },
      { name: "Nikkei 225", price: "39,910.82", change: "1.75%", positive: true, icon: "N", color: "bg-red-700" },
      { name: "Shanghai", price: "3,048.98", change: "-0.91%", positive: false, icon: "S", color: "bg-red-600" },
      { name: "HSI", price: "16,589.45", change: "0.23%", positive: true, icon: "H", color: "bg-red-800" },
    ],
    box: [
      { name: "S&P 500", price: "5,234.18", change: "0.85%", positive: true, icon: "S", color: "bg-blue-800" },
      { name: "Dow Jones", price: "38,749.12", change: "0.56%", positive: true, icon: "D", color: "bg-blue-700" },
      { name: "NASDAQ", price: "16,382.75", change: "1.12%", positive: true, icon: "N", color: "bg-purple-700" },
      { name: "FTSE 100", price: "7,682.45", change: "-0.32%", positive: false, icon: "F", color: "bg-indigo-600" },
      { name: "DAX", price: "17,842.35", change: "0.44%", positive: true, icon: "D", color: "bg-gray-700" },
      { name: "Nikkei 225", price: "39,910.82", change: "1.75%", positive: true, icon: "N", color: "bg-red-700" },
      { name: "Shanghai", price: "3,048.98", change: "-0.91%", positive: false, icon: "S", color: "bg-red-600" },
      { name: "HSI", price: "16,589.45", change: "0.23%", positive: true, icon: "H", color: "bg-red-800" },
    ],
    transfer: [
      { name: "S&P 500", price: "5,234.18", change: "0.85%", positive: true, icon: "S", color: "bg-blue-800" },
      { name: "Dow Jones", price: "38,749.12", change: "0.56%", positive: true, icon: "D", color: "bg-blue-700" },
      { name: "NASDAQ", price: "16,382.75", change: "1.12%", positive: true, icon: "N", color: "bg-purple-700" },
      { name: "FTSE 100", price: "7,682.45", change: "-0.32%", positive: false, icon: "F", color: "bg-indigo-600" },
      { name: "DAX", price: "17,842.35", change: "0.44%", positive: true, icon: "D", color: "bg-gray-700" },
      { name: "Nikkei 225", price: "39,910.82", change: "1.75%", positive: true, icon: "N", color: "bg-red-700" },
      { name: "Shanghai", price: "3,048.98", change: "-0.91%", positive: false, icon: "S", color: "bg-red-600" },
      { name: "HSI", price: "16,589.45", change: "0.23%", positive: true, icon: "H", color: "bg-red-800" },
    ]
  };

  
function GlobalMarketsSection ()  {
  const [activeTab, setActiveTab] = useState<TabID>('crypto');
  const [, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const marketListRef = useRef<HTMLDivElement>(null);

  // Scroll animation config
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, mass: 0.8 };
  

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const fasterY = useTransform(scrollYProgress, [0, 0.3], [200, 0]); // Faster motion
  const springFasterY = useSpring(fasterY, { stiffness: 150, damping: 20, mass: 0.5 }); 

  const springScale = useSpring(scale, springConfig);
  const springY = useSpring(y, springConfig);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (marketListRef.current) {
      observer.observe(marketListRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div ref={sectionRef} className="relative bg-transparent min-h-screen w-full overflow-hidden">
    <div className="absolute left-0 top-44 h-full w-full pointer-events-none">
      {/* First background element */}
      <motion.div
        style={{ y: springY }}
        className="absolute left-0 bottom-1/4 w-60 h-60 opacity-40"
      >
        <img src={shapeImage1Black} alt="Shape Image 4" />
      </motion.div>
  
      {/* Second background element */}
      <motion.div
        style={{ y: springFasterY }}
        className="absolute right-20 bottom-1/4 w-20 h-20 opacity-20"
      >
        <img src={shapeImage2Black} alt="Shape Image 4" className="rotate-[40deg]" />
      </motion.div>
    </div>
  
    {/* Decorative Background */}
    <div className="absolute inset-0 z-0">
      <svg 
        viewBox="0 0 1200 600" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <g transform="rotate(4, 300, 300)">
          <rect
            x="160"
            y="20"
            width="850"
            height="350"
            rx="16"
            ry="16"
            className="fill-blue-900/20"
            transform="translate(8, 8)"
          />
          <rect
            x="180"
            y="40"
            width="850"
            height="350"
            rx="16"
            ry="16"
            className="fill-blue-900"
          />
        </g>
      </svg>
    </div>
  
    {/* Content */}
    <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-12">
      {/* Left Content */}
      <div className="text-white w-full md:w-1/2 space-y-6 px-4 sm:px-6 lg:px-8 mt-24 md:mt-0">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl leading-snug lg:leading-normal">
          A world of opportunities with <br />
          <span className="text-blue-400 font-bold">GLOBAL MARKETS</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed opacity-90">
          Discover thousands of CFDs on the world's most popular financial
          instruments and get free real-time quotes to explore endless trading
          opportunities.
        </p>
      </div>
  
      {/* Right Content: Market List */}
      <motion.div
        ref={marketListRef}
        style={{
          scale: springScale,
          y: springY,
        }}
        className="w-full md:w-[500px] lg:w-[550px] bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 mt-10 md:mt-0"
      >
        {/* Tab Navigation */}
        <div className="flex items-center justify-between mb-6 md:mb-8 bg-gray-50/80 rounded-2xl p-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
                ${tab.id === activeTab 
                  ? "bg-white text-blue-500 shadow-lg transform scale-110" 
                  : "text-gray-400 hover:text-blue-400"
                }`}
            >
              {tab.icon}
            </motion.button>
          ))}
        </div>
  
        {/* Market Items */}
        <div className="space-y-2">
          {marketData[activeTab]?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white font-medium shadow-sm`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium">{item.name}</span>
                  <span className="text-gray-500">${item.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`font-medium ${
                    item.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.change}
                </span>
                <button className="px-4 py-1.5 text-sm border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200">
                  Trade
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>  
  );
};

export default GlobalMarketsSection;