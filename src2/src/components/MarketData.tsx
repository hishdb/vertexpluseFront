import { motion, } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
type TabID = "crypto" | "popular";
type Tab = {
    id: TabID;
    icon: string;
    label: string;
  };
const tabs: Tab[] = [
    { id: "crypto", icon: "₿", label: "Crypto" },
    { id: "popular", icon: "🔥", label: "Popular" },
];

type MarketItem = {
    name: string;
    price: string | null; // Price fetched from the API
    change: string; // You can modify or remove this if not available from API
    positive: boolean; // Based on change direction
    icon: string;
    color: string;
  };
const initialMarketData: MarketItem[] = [
    { name: "Bitcoin", price: null, change: "0.00%", positive: true, icon: "₿", color: "bg-orange-500" },
    { name: "Ethereum", price: null, change: "0.00%", positive: true, icon: "Ξ", color: "bg-purple-500" },
  ];

function MarketData() {
  const [activeTab, setActiveTab] = useState<TabID>("crypto");
  const [marketData, setMarketData] = useState<MarketItem[]>(initialMarketData); 
  const { t } = useTranslation();
    // Fetch data from the API
    const fetchMarketData = async () => {
      try {
        const apiKey = "e0IdBv1m0WNsTuAVcyuvsQ==o79kqzOwOrzBC19z"; // Replace with your API key
        const symbols = ["BTCUSDT", "ETHUSDT"]; // Add desired symbols
        const requests = symbols.map((symbol) =>
          fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`, {
            headers: { "X-Api-Key": apiKey },
          })
        );
  
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map((res) => res.json()));
  
        // Map API data to the marketData structure
        const updatedMarketData = data.map((item, index) => ({
          ...initialMarketData[index], // Retain other data
          price: item.price, // Update price from API
          positive: parseFloat(item.price) >= 0, // Assume positive change for now
          change: `${(Math.random() * 2 - 1).toFixed(2)}%`, // Mock change for demo
        }));
  
        setMarketData(updatedMarketData); // Update the state
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };
  
    // Polling to fetch data every 5 seconds
    useEffect(() => {
      fetchMarketData(); // Initial fetch
      const interval = setInterval(fetchMarketData, 5000); // Fetch every 5 seconds
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  return (
          
            <motion.div className="order-2 w-full md:w-[500px] lg:w-[550px] bg-white rounded-3xl shadow-2xl p-4 md:p-6 lg:p-6 mt-10 md:mt-0">
         
            <div className="flex items-center justify-between mb-6 md:mb-8 bg-gray-50/80 rounded-2xl p-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
                    ${tab.id === activeTab ? "bg-white text-blue-500 shadow-lg transform scale-110" : "text-gray-400 hover:text-blue-400"}`}
                >
                  {tab.icon}
                </motion.button>
              ))}
            </div>
  
      
            <div className="space-y-2">
              {marketData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-1 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white font-medium shadow-sm`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-medium">{item.name}</span>
                      <span className="text-gray-500">
                        {item.price ? `$${item.price}` : t("Loading")}
                      </span>
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
   );
}

export default MarketData;