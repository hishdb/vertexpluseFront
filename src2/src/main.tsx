import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import './index.css';
import "./i18n";
import Home from './pages/Home.tsx';
import Crypto from './pages/Crypto.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Indices from './pages/Indices.tsx';
import Forex from './pages/Forex.tsx';
import Commodities from './pages/Commodities.tsx';
import Shares from './pages/Shares.tsx';
import Options from './pages/Options.tsx';
import ETFS from './pages/ETFs.tsx';
import PremiumService from './pages/PremiumService.tsx';
import FeesCharges from './pages/FeesCharges.tsx';
import ESG from './pages/ESG.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Affiliate from './pages/Afiliates.tsx';
import { register } from 'swiper/element/bundle';
import AllMarkets from './pages/AllMarkets.tsx';
import InvestorRelations from './pages/InvestorRelations.tsx';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Support from './pages/Support.tsx';

// Register Swiper
register();

// Floating Action Button Component
function FloatingBackToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    showScrollButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
}

// Layout Component (Includes Floating Button)
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet /> {/* This renders the current route component */}
      <FloatingBackToTop />
    </div>
  );
}

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap everything inside Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <NotFoundPage /> },
      { path: '/crypto', element: <Crypto /> },
      { path: '/indices', element: <Indices /> },
      { path: '/forex', element: <Forex /> },
      { path: '/commodities', element: <Commodities /> },
      { path: '/shares', element: <Shares /> },
      { path: '/options', element: <Options /> },
      { path: '/etfs', element: <ETFS /> },
      { path: '/PremiumService', element: <PremiumService /> },
      { path: '/FeesCharges', element: <FeesCharges /> },
      { path: '/ESG', element: <ESG /> },
      { path: '/About Us', element: <AboutUs /> }, 
      { path: '/Affiliate', element: <Affiliate /> },
      { path: '/all-markets', element: <AllMarkets /> },
      { path: '/Investor Relations', element: <InvestorRelations /> },
      { path: '/Support', element: <Support /> },
    ],
  },
]);

// Render the App
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
