import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.tsx'
import Crypto from './pages/Crypto.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
const router = createBrowserRouter([
  {
  path:'/',
  element: <Home/>,
  errorElement: <NotFoundPage/>
  },
  {
    path:'/crypto',
    element: <Crypto/>,
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
