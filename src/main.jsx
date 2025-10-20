import { HelmetProvider } from 'react-helmet-async';


import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'
import "./styles/fonts.css"
import "./styles/toolkit.css"

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './pages/bcn/Index/index.jsx'
// import About from './pages/bcn/About/About.jsx'
import { BASENAME } from './config.js'
import BcnNosotros from './pages/bcn/Nosotros/Nosotros.jsx'
import BcnCittySelector from './pages/CitySelector/CitySelector.jsx'
import BcnCalculatorMap from './pages/bcn/CalculatorMap/CalculatorMap.jsx'


import MadIndex from './pages/mad/Index/index.jsx'
import MadNosotros from './pages/mad/Nosotros/Nosotros.jsx'
import MadCalculatorMap from './pages/mad/CalculatorMap/CalculatorMap.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <BcnCittySelector />, 
  },
  {
    path: '/barcelona',
    element: <App />,
    children: [
      { path: '', element: <Index /> },
      { path: 'nosotros', element: <BcnNosotros /> },
      { path: 'calculate', element: <BcnCalculatorMap /> },
    ],
  },
  {
    path: '/madrid',
    element: <App />,
    children: [
      { path: '', element: <MadIndex /> },
      { path: 'nosotros', element: <MadNosotros /> },
      { path: 'calculate', element: <MadCalculatorMap /> },
    ],
  },
], {
  basename: BASENAME,
})








createRoot(document.getElementById('root')).render(
  // <Context>
  <HelmetProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </HelmetProvider>
  //  </Context> 
  ,
)





