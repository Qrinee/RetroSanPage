import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

import './components/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import PromotionsPage from './pages/PromotionsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/RetroSanPage",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "RetroSanPage/menu",
    element: <MenuPage/>
  },
  {
    path: "RetroSanPage/promocje",
    element: <PromotionsPage/>
  },
  {
    path: "RetroSanPage/kontakt",
    element: <ContactPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
