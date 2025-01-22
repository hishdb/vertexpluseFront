import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, TrendingDown, TrendingUp, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import ShareholderCentre from "../assets/ShareholderCentre.webp"

function InvestorRelations() {

    const stockPrice = {
      value: 1959.42,
      change: -1.12,
      currency: '£',
      timestamp: '16:35 GMT',
      date: 'January 10, 2025'
    };


    const {t, i18n} = useTranslation();
    const isRTL = i18n.language === "ar";


    return (    
    <div className="flex flex-col min-h-screen"   >
    <MenuBar />
    
    <main className="flex-grow "
    dir={isRTL ? "rtl" : "ltr"}
    >
     {/* first */}   
     <div className="w-full max-w-7xl mx-auto p-6 space-y-8 pt-48">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-blue-900 text-white p-8 mb-8">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/30 transform rotate-12 translate-x-10" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              {t("InvestorRelations")}
            </h1>
            <p className="text-blue-100 max-w-xl">
            {t("VertexPluseIsAGlobal")}
            </p>
            <div className="flex gap-4">
              <button
               onClick={() => window.location.href = "https://platform.vertexpluse.com"}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                {t("LEARNMORE")}
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
               onClick={() => window.location.href = "https://platform.vertexpluse.com"}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors">
                {t("Subscribe")}
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-semibold">{t("LON:PLUS")}</h2>
              <span className="text-sm text-blue-200">London Stock Exchange</span>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-4xl font-bold">{stockPrice.currency}{stockPrice.value}M</span>
              <div className={`flex items-center gap-1 ${stockPrice.change < 0 ? 'text-red-400' : 'text-green-400'}`}>
                {stockPrice.change < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                <span>{Math.abs(stockPrice.change)}%</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-blue-200">
              {stockPrice.date} | {stockPrice.timestamp}
            </div>
          </div>
        </div>
      </div>


    </div>
    {/* second */}
    <div className="flex items-center justify-center p-10 ">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 text-blue-900">
          <h1 className=" text-7xl font-bold mb-4">FY 2023</h1>
          <h2 className=" text-2xl tracking-wider">{t("KEYMETRICS")}</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <MetricCard 
            icon={
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 7v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3l1-2h4l1 2h3c1.1 0 2 .9 2 2z"/>
              </svg>
            }
            value="$726.2m"
            label={t("REVENUE")}
          />

          <MetricCard 
            icon={
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18"/>
                <path d="M7 17l4-4 4 4 4-4"/>
              </svg>
            }
            value="$340.5m"
            label={t("EBITDA")}
          />

          <MetricCard 
            icon={
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            }
            value="233,037"
            label={t("ACTIVECUSTOMERS")}
          />

          <MetricCard 
            icon={
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v8"/>
                <path d="M8 12h8"/>
              </svg>
            }
            value="90,944"
            label={t("NEWCUSTOMERS")}
          />
        </div>
      </div>
    </div>
    {/* third */}
    <div className="relative bg-white pb-10">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            {t("SHAREHOLDERCENTRE")}
          </h2>
          <p className="text-gray-600 text-lg">
            {t("AccessvertexPluse’sShareholder")}           
          </p>
          <motion.button
           onClick={() => window.location.href = "https://platform.vertexpluse.com/login"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 bg-blue-500 text-white font-medium text-lg rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            {t("LEARNMORE")}
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="relative">
            <div className="bg-blue-900 rounded-xl w-80 h-96 absolute -top-6 -left-6"></div>
            <img
              src={ShareholderCentre}
              alt="Phone"
              className="relative w-80 h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
    </main>
    
      <Footer />

  </div>
    );
}

interface MetricCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
  }
const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label }) => (
  <div className="bg-white rounded-xl p-12 flex flex-col items-center text-center min-w-[160px] min-h-[250px] border-2 border-blue-500 justify-center">
    <div className="text-blue-500 mb-8">
      {icon}
    </div>
    <div className="text-4xl font-bold text-blue-900 mb-3">
      {value}
    </div>
    <div className="text-gray-500 text-base uppercase tracking-wider">
      {label}
    </div>
  </div>
);
export default InvestorRelations;
