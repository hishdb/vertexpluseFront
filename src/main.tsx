import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import './index.css'
import "./i18n";
import Home from './pages/Home.tsx'
import Crypto from './pages/Crypto.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
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

const router = createBrowserRouter(
  [
    { path: "/",
      element: <Home />
    },
    { path: "*", 
      element: <NotFoundPage /> }, 
    {
      path:'/crypto',
      element: <Crypto/>,
    },
    {
      path:'/indices',
      element: <Indices/>,
    },
    {
      path:'/forex',
      element: <Forex/>,
    },
    {
      path:'/commodities',
      element: <Commodities/>,
    },
    {
      path:'/shares',
      element: <Shares/>,
    },
    {
      path:'/options',
      element: <Options/>,
    },
    {
      path:'/etfs',
      element: <ETFS/>,
    },
    {
      path:'/PremiumService',
      element: <PremiumService/>,
    },
    {
      path:'/FeesCharges',
      element: <FeesCharges/>,
    },
    {
      path:'/ESG',
      element: <ESG/>,
    },
    {
      path:'/About Us',
      element: <AboutUs/>,
    },
    {
      path:'/Affiliate',
      element: <Affiliate/>,
    },
    {
      path: '/all-markets',
      element: <AllMarkets/>,
    },
    {
      path: '/Investor Relations',
      element: <InvestorRelations/>,
    },
    {
      path: 'Support',
      element: <Support/>
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enables relative paths in nested routes
      v7_fetcherPersist: true,   // Retains fetcher state during navigation
      v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
      v7_partialHydration: true, // Supports partial hydration for server-side rendering
      v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
    },
  }
);
register();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider 
     
      router={router}/>
  </StrictMode>,
)
