import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'
import "./styles/fonts.css"
import "./styles/toolkit.css"

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './pages/Index/index.jsx'
import About from './pages/About/About.jsx'
import CalculatorMap from './pages/CalculatorMap/CalculatorMap.jsx'
import { BASENAME } from './config.js'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App is the layout component
    children: [
      {path: '/',element: <Index/>},
      // {path: 'about',element: <About/>,},
      {path: 'calculate',element: <CalculatorMap/>,},
    ],
  },
], {
  basename: BASENAME, // Apply the basename here
})


createRoot(document.getElementById('root')).render(
  // <Context>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  //  </Context> 
  ,
)





