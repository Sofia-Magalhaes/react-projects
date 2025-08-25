import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import App from './App.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'
import Info from './routes/Info.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // componente base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "products/:id/info",
        element: <Info />,
      }
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
