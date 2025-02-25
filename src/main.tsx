import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/homepage/Home_page'
import About from './pages/about/About'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }, 
  {
    path: ':search',
    element: <About />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
