import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/homepage/Home_page'
import About from './pages/about/about'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }, 
  {
    path: 'sobre',
    element: <About />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
