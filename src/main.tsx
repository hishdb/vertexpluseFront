import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "./i18n";
import Home from './pages/Home.tsx'
import Crypto from './pages/Crypto.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import Indices from './pages/Indices.tsx';
import Forex from './pages/Forex.tsx';
import Commodities from './pages/Commodities.tsx';
import Shares from './pages/Shares.tsx';
const router = createBrowserRouter([
  {
  path:'/',
  element: <Home/>,
  errorElement: <NotFoundPage/>
  },
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
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
